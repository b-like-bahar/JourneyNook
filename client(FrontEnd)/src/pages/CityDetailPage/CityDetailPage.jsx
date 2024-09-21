import { useRef, useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Api } from "../../../../client(FrontEnd)/src/utils/utils"
import { Link } from "react-router-dom";
import scrollArrowIcon from '../../assets/icons/scroll-arrow.svg';
import { ReactSVG } from "react-svg";
import "./CityDetailPage.scss"


function CityDetailPage() {
    const { cityId, attractionId } = useParams();
    const api = new Api();
    const location = useLocation();


    const { cityName, country } = location.state || {};

    const [attractions, setAttractions] = useState([]);
    const [selectedAttraction, setSelectedAttraction] = useState({});
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);
    const landmarkListRef = useRef(null);

    useEffect(() => {
        const getCityAttractions = async () => {

            const fetchedAttractions = await api.getAttractionsGivenCityId(cityId);
            setAttractions(fetchedAttractions);

            if (attractionId) {
                getAttractionDetails(attractionId)
            } else {
                setSelectedAttraction(fetchedAttractions[0]);
            }
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
    
    return (
        <>
            <div className="city">
                <h1 className="city__name">
                    {cityName}, {country}
                </h1>
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
                        <li className="city__landmark-info-category  city__landmark-info-detail">
                            Category: {selectedAttraction.category}
                        </li>
                        <li className="city__landmark-info-description  city__landmark-info-detail">
                            Description: {selectedAttraction.description}
                        </li>
                        <li className="city__landmark-info-bestTimeToVisit  city__landmark-info-detail">
                            Best Time to Visit: {selectedAttraction.best_time_to_visit}
                        </li>
                        <li className="city__landmark-info-hours  city__landmark-info-detail">
                            Opening Hours: {selectedAttraction.hours}
                        </li>
                        <li className="city__landmark-info-fee  city__landmark-info-detail">
                            Entrance Fee: {selectedAttraction.fee}
                        </li>
                        <li className="city__landmark-info-nearbyAttraction  city__landmark-info-detail">
                            Nearby Attractions: {selectedAttraction.nearby_attraction}
                        </li>
                        <li className="city__landmark-info-travelTips  city__landmark-info-detail">
                            Travel Tips: {selectedAttraction.travel_tips}
                        </li>
                    </ul>
                </div>
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
                        {attractions
                            ?.filter((attraction) => attraction.id !== selectedAttraction?.id)
                            .map((attraction) => (
                                <li
                                    key={attraction.id}
                                    className="attractions__pics-item"
                                    onClick={() => getAttractionDetails(attraction.id)}
                                >
                                    <Link 
                                    to={`/city/${cityId}/attractions/${attraction.id}`}
                                    state={{ cityName, country }}
                                    >
                                        <img
                                            className="attractions__pics-item-img"
                                            src={attraction.attraction_image_path}
                                            alt={attraction.attraction_name}
                                        />
                                        <h2 className="attractions__pics-item-location">
                                            {attraction.attraction_name}
                                        </h2>
                                    </Link>
                                </li>
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