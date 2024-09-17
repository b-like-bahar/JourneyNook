import "./HomePage.scss"
import cancunImage from '../../assets/images/Cancun-Mexico.png';
import barcelonaImage from '../../assets/images/Barcelona-Spain.png';
import istanbulImage from '../../assets/images/Istanbul-Turkey.png';
import londonImage from '../../assets/images/London-England.png';
import moscowImage from '../../assets/images/Moscow-Russia.png';
import parisImage from '../../assets/images/Paris-France.png';
import rioImage from '../../assets/images/Rio-Brasil.png';
import romeImage from '../../assets/images/Rome-Italy.png';
import shanghaiImage from '../../assets/images/Shanghai-China.png';
import sydneyImage from '../../assets/images/Sydney-Australia.png';
import scrollArrowIcon from '../../assets/icons/scroll-arrow.svg';
import { useRef, useState, useEffect } from 'react';
import { ReactSVG } from "react-svg";


function HomePage() {
    const destinationListRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

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
                <div className="hero__about">
                    <h2 className="hero__about-title">ABOUT</h2>
                    <p className="hero__about-text  large">
                        At JourneyNook, our purpose is to inspire and guide travelers through every step of their journey.
                        Whether you’re dreaming of your next destination or planning every detail of your trip,
                        JourneyNook is here to make your travel experience seamless and enjoyable.
                    </p>
                </div>
            </div>
            <div className="destinations">
                <h2 className="destinations__title">
                    Explore top spots for your next adventure
                </h2>
                <div className="destinations__scroll">
                    {showLeftButton && (
                        <button className="destinations__scroll-button-left" onClick={scrollLeft}>
                            <ReactSVG className="destinations__scroll-button-left-svg"src={ scrollArrowIcon } />
                        </button>
                    )}
                    <ul className="destinations__pics" ref={destinationListRef}>
                        <li className="destinations__pics-item">
                            <img className="destinations__pics-item-img" src={cancunImage} />
                            <h2 className="destinations__pics-item-location">
                                Cancun, Mexico
                            </h2>
                        </li>
                        <li className="destinations__pics-item">
                            <img className="destinations__pics-item-img" src={barcelonaImage} />
                            <h2 className="destinations__pics-item-location">
                                Barcelona, Spain
                            </h2>
                        </li>
                        <li className="destinations__pics-item">
                            <img className="destinations__pics-item-img" src={istanbulImage} />
                            <h2 className="destinations__pics-item-location">
                                Istanbul, Turkey
                            </h2>
                        </li>
                        <li className="destinations__pics-item">
                            <img className="destinations__pics-item-img" src={londonImage} />
                            <h2 className="destinations__pics-item-location">
                                London, England
                            </h2>
                        </li>
                        <li className="destinations__pics-item">
                            <img className="destinations__pics-item-img" src={moscowImage} />
                            <h2 className="destinations__pics-item-location">
                                Moscow, Russia
                            </h2>
                        </li>
                        <li className="destinations__pics-item">
                            <img className="destinations__pics-item-img" src={parisImage} />
                            <h2 className="destinations__pics-item-location">
                                Paris, France
                            </h2>
                        </li>
                        <li className="destinations__pics-item">
                            <img className="destinations__pics-item-img" src={rioImage} />
                            <h2 className="destinations__pics-item-location">
                                Rio, Brasil
                            </h2>
                        </li>
                        <li className="destinations__pics-item">
                            <img className="destinations__pics-item-img" src={romeImage} />
                            <h2 className="destinations__pics-item-location">
                                Rome, Italy
                            </h2>
                        </li>
                        <li className="destinations__pics-item">
                            <img className="destinations__pics-item-img" src={shanghaiImage} />
                            <h2 className="destinations__pics-item-location">
                                Shanghai, China
                            </h2>
                        </li>
                        <li className="destinations__pics-item">
                            <img className="destinations__pics-item-img" src={sydneyImage} />
                            <h2 className="destinations__pics-item-location">
                                Sydney, Australia
                            </h2>
                        </li>
                    </ul>
                    {showRightButton && (
                        <button className="destinations__scroll-button-right" onClick={scrollRight}>
                            <ReactSVG className="destinations__scroll-button-right-svg"src={ scrollArrowIcon } />
                        </button>
                    )}
                </div>
            </div>
        </>

    )
}

export default HomePage