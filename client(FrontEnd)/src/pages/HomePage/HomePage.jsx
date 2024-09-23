import { useRef, useState, useEffect } from 'react';
import { Api } from "../../utils/utils.js"
import { useNavigate } from 'react-router-dom';
import { ReactSVG } from "react-svg";
import scrollArrowIcon from '../../assets/icons/scroll-arrow.svg';
import aboutImage from '../../assets/images/about-us-pic.jpg';
import "./HomePage.scss"


function HomePage() {
    document.title = "JourneyNook"
    const api = new Api();
    const navigate = useNavigate();

    const [cities, setCities] = useState([])
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);
    const destinationListRef = useRef(null);

    useEffect(() => {

        const getCities = async () => {
            const allCities = await api.getAllCities();
            setCities(allCities);
        };
        getCities();
    }, []);

    const scrollLeft = () => {
        if (destinationListRef.current) {
            destinationListRef.current.scrollBy({
                top: 0,
                left: -300,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (destinationListRef.current) {
            destinationListRef.current.scrollBy({
                top: 0,
                left: 300,
                behavior: 'smooth'
            });
        }
    };

    const checkScrollPosition = () => {
        if (destinationListRef.current) {
            const scrollLeftValue = destinationListRef.current.scrollLeft;
            const maxScrollLeft = destinationListRef.current.scrollWidth - destinationListRef.current.clientWidth;

            setShowLeftButton(scrollLeftValue > 0);
            setShowRightButton(scrollLeftValue < maxScrollLeft);
        }
    };

    useEffect(() => {
        const listRef = destinationListRef.current;
        if (listRef) {
            listRef.addEventListener('scroll', checkScrollPosition);
        }
        return () => {
            if (listRef) {
                listRef.removeEventListener('scroll', checkScrollPosition);
            }
        };
    }, []);

    const cityClickHandler = (city) => {
        navigate(`/city/${city.id}`, { state: { cityName: city.city_name, country: city.country } });
    };

    return (
        <>
            <div className="hero">
                <div className="hero__item">
                    <div className="hero__item-quote">
                        <h1 className="hero__item-quote-firstLine">
                            “Traveling – it leaves you speechless,
                        </h1>
                        <h1 className="hero__item-quote-secondLine">
                            then turns you into a storyteller.”
                        </h1>
                        <h3 className="hero__item-quote-name">
                            – Ibn Battuta
                        </h3>
                    </div>
                </div>
            </div>

            <div className="about">
                <h2 className="about__title">About JourneyNook</h2>
                <div className="about__item">
                    <div className="about__item-visual">
                        <img className="about__item-visual-img" src={aboutImage} />
                        <div className="about__item-visual-border"></div>
                    </div>
                    <div className="about__item-description">
                        <p className="about__item-description-text1  large">
                            At JourneyNook, our purpose is to inspire and guide travelers through every step of their journey.
                            Whether you’re dreaming of your next destination or planning every detail of your trip,
                            JourneyNook is here to make your travel experience seamless and enjoyable.
                        </p>
                        <p className="about__item-description-text2  large">
                            We curate must-see landmarks, hidden gems, and essential travel tips for cities worldwide.
                            With our itinerary builder, you can plan your days, adjust activities, and tailor your schedule to your preferences.
                            JourneyNook ensures you're prepared to explore confidently, from iconic sights to local hidden gems.
                        </p>
                    </div>
                </div>
            </div>
            <div className="destinations">
                <h2 className="destinations__title">
                    Explore top spots for your next adventure
                </h2>
                <div className="destinations__scroll">
                    {showLeftButton && (
                        <button className="destinations__scroll-button-left" onClick={scrollLeft}>
                            <ReactSVG className="destinations__scroll-button-left-svg" src={scrollArrowIcon} />
                        </button>
                    )}
                    <ul className="destinations__pics" ref={destinationListRef}>
                        {cities.map((city) => (
                            <li key={city.id}
                                className="destinations__pics-item"
                                onClick={() => cityClickHandler(city)}
                            >
                                <img
                                    className="destinations__pics-item-img"
                                    src={city.city_image_path}
                                    alt={city.city_name}
                                />
                                <h2 className="destinations__pics-item-location">
                                    {city.city_name}, {city.country}
                                </h2>
                            </li>
                        ))}
                    </ul>
                    {showRightButton && (
                        <button className="destinations__scroll-button-right" onClick={scrollRight}>
                            <ReactSVG className="destinations__scroll-button-right-svg" src={scrollArrowIcon} />
                        </button>
                    )}
                </div>
            </div>
        </>

    )
}

export default HomePage