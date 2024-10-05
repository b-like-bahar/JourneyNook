import { useRef, useState, useEffect } from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import { Api } from "../../utils/utils.js";
import scrollArrowIcon from '../../assets/icons/scroll-arrow.svg';
import { ReactSVG } from "react-svg";
import "./CityDetailPage.scss"
import PlanTripModal from "../../components/PlanTripModal/PlanTripModal.jsx";


function CityDetailPage() {

    const api = new Api();
    const location = useLocation();
    const navigate = useNavigate();
    const [cityName, setCityName] = useState(location.state?.cityName || "");
    const [country, setCountry] = useState(location.state?.country || "");
    const { cityId, attractionId } = useParams();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [days, setDays] = useState('');
    const [budget, setBudget] = useState('');
    const [numberOfPeople, setNumberOfPeople]= useState('');
    const [tripType, setTripType] = useState('');
    const [attractions, setAttractions] = useState([]);
    const [selectedAttraction, setSelectedAttraction] = useState({});
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);
    const [loading, setLoading] = useState(false);
    const landmarkListRef = useRef(null);


    useEffect(() => {
        document.title = `JourneyNook - ${cityName}`
        if (!cityName || !country) {
            const { cityName, country } = location.state || {};
            setCityName(cityName || "Unknown City");
            setCountry(country || "Unknown Country");
        }
    }, [location.state]);

    useEffect(() => {
        const getCityAttractions = async () => {

            const fetchedAttractions = await api.getAttractionsGivenCityId(cityId);
            setAttractions(fetchedAttractions);

            if (attractionId) {
                getAttractionDetails(attractionId)
            } else {
                setSelectedAttraction(fetchedAttractions[0]);
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        getCityAttractions();
    }, [cityId, attractionId]);

    const getAttractionDetails = async (id) => {
        const attractionDetails = await api.getAttractionDetails(id);
        setSelectedAttraction(attractionDetails);
    };

    const scrollLeft = () => {
        if (landmarkListRef.current) {
            landmarkListRef.current.scrollBy({
                top: 0,
                left: -300,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (landmarkListRef.current) {
            landmarkListRef.current.scrollBy({
                top: 0,
                left: 300,
                behavior: 'smooth'
            });
        }
    };

    const checkScrollPosition = () => {
        if (landmarkListRef.current) {
            const scrollLeftValue = landmarkListRef.current.scrollLeft;
            const maxScrollLeft = landmarkListRef.current.scrollWidth - landmarkListRef.current.clientWidth;

            setShowLeftButton(scrollLeftValue > 0);
            setShowRightButton(scrollLeftValue < maxScrollLeft);
        }
    };

    useEffect(() => {
        const listRef = landmarkListRef.current;
        if (listRef) {
            listRef.addEventListener('scroll', checkScrollPosition);
        }
        return () => {
            if (listRef) {
                listRef.removeEventListener('scroll', checkScrollPosition);
            }
        };
    }, []);

    const arrayDivider = (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };

    const closeModal = () => setModalIsOpen(false);
    const submitTripFormHandler = async (tripData) => {
        setLoading(true);
        try {
            const generatedItinerary = await api.generateItinerary(cityName, tripData.days, tripData.budget, tripData.numberOfPeople, tripData.tripType);

            if (generatedItinerary) {
                navigate(`/city/${cityId}/itinerary`, { state: { itinerary: generatedItinerary, cityName } });
                closeModal();
            } else {
                alert("Failed to generate the itinerary. Please try again.");
            }
        } catch (err) {
            console.error("Error generating itinerary:", err);
            alert("Failed to generate the itinerary. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const openModal = () => {
        setDays('');
        setBudget('');
        setNumberOfPeople('');
        setTripType('');
        setModalIsOpen(true);
    };

    return (
        <>
            {loading && (
                <div className="loading-overlay">
                    <div className="loading-overlay__message large">
                        <div className="loading-overlay__loader"></div>
                        Generating your itinerary, please wait...
                    </div>
                </div>
            )}
            <div className="city">
                <div className="city__header">
                    <h1 className="city__header-name">
                        {cityName}, {country}
                    </h1>
                    <h3 className="city__header-btn" onClick={openModal}>
                        Plan my Trip
                    </h3>
                </div>

                <div className="city__landmark">
                    <div className="city__landmark-container">
                        <img className="city__landmark-container-img"
                            src={selectedAttraction.attraction_image_path}
                            alt={selectedAttraction.attraction_name}
                        />
                    </div>
                    <h2 className="city__landmark-name">
                        {selectedAttraction.attraction_name}
                    </h2>
                    <ul className="city__landmark-info">
                        <li className="city__landmark-info-category  city__landmark-info-detail large">
                            Category: {selectedAttraction.category}
                        </li>
                        <li className="city__landmark-info-description  city__landmark-info-detail large">
                            Description: {selectedAttraction.description}
                        </li>
                        <li className="city__landmark-info-bestTimeToVisit  city__landmark-info-detail large">
                            Best Time to Visit: {selectedAttraction.best_time_to_visit}
                        </li>
                        <li className="city__landmark-info-hours  city__landmark-info-detail large">
                            Opening Hours: {selectedAttraction.hours}
                        </li>
                        <li className="city__landmark-info-fee  city__landmark-info-detail large">
                            Entrance Fee: {selectedAttraction.fee}
                        </li>
                        <li className="city__landmark-info-nearbyAttraction  city__landmark-info-detail large">
                            Nearby Attractions: {selectedAttraction.nearby_attraction}
                        </li>
                        <li className="city__landmark-info-travelTips  city__landmark-info-detail large">
                            Travel Tips: {selectedAttraction.travel_tips}
                        </li>
                    </ul>
                </div>
                <PlanTripModal
                    isOpen={modalIsOpen}
                    onClose={closeModal}
                    onSubmit={submitTripFormHandler}
                    days={days}
                    setDays={setDays}
                    budget={budget}
                    setBudget={setBudget}
                    numberOfPeople={numberOfPeople}
                    setNumberOfPeople={setNumberOfPeople}
                    tripType={tripType}
                    setTripType={setTripType}
                />
            </div>
            <div className="attractions">
                <h2 className="attractions__title">
                    Places to visit
                </h2>
                <div className="attractions__scroll">
                    {showLeftButton && (
                        <button className="attractions__scroll-button-left" onClick={scrollLeft}>
                            <ReactSVG className="attractions__scroll-button-left-svg" src={scrollArrowIcon} />
                        </button>
                    )}
                    <ul className="attractions__pics" ref={landmarkListRef}>
                        {arrayDivider(
                            attractions
                                ?.filter((attraction) => attraction.id !== selectedAttraction?.id), 2
                        ).map((attractionPair, index) => (
                            <div key={index} className="attractions__pics-divider">
                                {attractionPair.map(attraction => (
                                    <li
                                        key={attraction.id}
                                        className="attractions__pics-item"
                                        onClick={() => getAttractionDetails(attraction.id)}
                                    >
                                        <Link
                                            className="attractions__pics-item-link"
                                            to={`/city/${cityId}/attractions/${attraction.id}`}
                                            state={{ cityName, country }}
                                        >
                                            <img
                                                className="attractions__pics-item-link-img"
                                                src={attraction.attraction_image_path}
                                                alt={attraction.attraction_name}
                                            />
                                            <h2 className="attractions__pics-item-link-location">
                                                {attraction.attraction_name}
                                            </h2>
                                        </Link>
                                    </li>
                                ))}
                            </div>
                        ))}
                    </ul>
                    {showRightButton && (
                        <button className="attractions__scroll-button-right" onClick={scrollRight}>
                            <ReactSVG className="attractions__scroll-button-right-svg" src={scrollArrowIcon} />
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

export default CityDetailPage