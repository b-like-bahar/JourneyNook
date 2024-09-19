import "./CityDetailPage.scss"
import scrollArrowIcon from '../../assets/icons/scroll-arrow.svg';
import { useRef, useState, useEffect } from 'react';
import { ReactSVG } from "react-svg";
import HagiaSophiaIstanbul from "../../assets/images/Hagia-Sophia-Istanbul.jpg"


function CityDetailPage() {
    const landmarkListRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

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
                    Istanbul
                </h1>
                <div className="city__landmark">
                    <div className="city__landmark-container">
                        <img className="city__landmark-container-img" src={HagiaSophiaIstanbul} />
                    </div>
                    <h2 className="city__landmark-name">
                        Hagia Sophia
                    </h2>
                    <ul className="city__landmark-info">
                        <li className="city__landmark-info-category  city__landmark-info-detail">
                            Category: Historical Monument
                        </li>
                        <li className="city__landmark-info-description  city__landmark-info-detail">
                            Description: Constructed in 537 AD, Hagia Sophia has served as a cathedral, mosque, and museum.
                            Known for its massive dome and Byzantine mosaics, it remains a symbol of religious and cultural transformation over centuries.
                        </li>
                        <li className="city__landmark-info-bestTimeToVisit  city__landmark-info-detail">
                            Best Time to Visit: Early morning or late afternoon to avoid crowds; sunset for the best light
                        </li>
                        <li className="city__landmark-info-hours  city__landmark-info-detail">
                            Opening Hours: Open daily, closed during prayer times
                        </li>
                        <li className="city__landmark-info-fee  city__landmark-info-detail">
                            Entry Fee: Free entry (donations appreciated)
                        </li>
                        <li className="city__landmark-info-nearbyAttraction  city__landmark-info-detail">
                            Nearby Attractions: Blue Mosque, Topkapi Palace, Basilica Cistern
                        </li>
                        <li className="city__landmark-info-travelTips  city__landmark-info-detail">
                            Travel Tips: Modest dress required, remove shoes inside, no flash photography
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
                        <div className="attractions__pics-divider">
                            <li className="attractions__pics-item">
                                <img className="attractions__pics-item-img" src={HagiaSophiaIstanbul} />
                                <h2 className="attractions__pics-item-location">
                                    Topkapi Palace
                                </h2>
                            </li>
                            <li className="attractions__pics-item">
                                <img className="attractions__pics-item-img" src={HagiaSophiaIstanbul} />
                                <h2 className="attractions__pics-item-location">
                                    Blue Mosque
                                </h2>
                            </li>
                        </div>
                        <div className="attractions__pics-divider">
                            <li className="attractions__pics-item">
                                <img className="attractions__pics-item-img" src={HagiaSophiaIstanbul} />
                                <h2 className="attractions__pics-item-location">
                                    Basilica Cistern
                                </h2>
                            </li>
                            <li className="attractions__pics-item">
                                <img className="attractions__pics-item-img" src={HagiaSophiaIstanbul} />
                                <h2 className="attractions__pics-item-location">
                                    Grand Bazaar
                                </h2>
                            </li>
                        </div>
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