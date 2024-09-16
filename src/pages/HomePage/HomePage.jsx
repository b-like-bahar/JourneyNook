import "./HomePage.scss"
import amsterdamImage from '../../assets/images/Amsterdam-Netherlands.png';
import barcelonaImage from '../../assets/images/Barcelona-Spain.png';
import istanbulImage from '../../assets/images/Istanbul-Turkey.png';
import londonImage from '../../assets/images/London-England.png';
import moscowImage from '../../assets/images/Moscow-Russia.png';
import parisImage from '../../assets/images/Paris-France.png';
import rioImage from '../../assets/images/Rio-Brasil.png';
import romeImage from '../../assets/images/Rome-Italy.png';
import shanghaiImage from '../../assets/images/Shanghai-China.png';
import sydneyImage from '../../assets/images/Sydney-Australia.png';

function HomePage() {
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
                <ul className="destinations__pics">
                    <li className="destinations__pics-item">
                        <img className="destinations__pics-item-img" src={ amsterdamImage } />
                        <span className="destinations__pics-item-location">
                        Amsterdam, Netherlands
                        </span>
                    </li>
                    <li className="destinations__pics-item">
                        <img className="destinations__pics-item-img" src={ barcelonaImage } />
                        <span className="destinations__pics-item-location">
                        Barcelona, Spain
                        </span>
                    </li>
                    <li className="destinations__pics-item">
                        <img className="destinations__pics-item-img" src={ istanbulImage } />
                        <span className="destinations__pics-item-location">
                            Istanbul, Turkey
                        </span>
                    </li>
                    <li className="destinations__pics-item">
                        <img className="destinations__pics-item-img" src={ londonImage } />
                        <span className="destinations__pics-item-location">
                            London, England
                        </span>
                    </li>
                    <li className="destinations__pics-item">
                        <img className="destinations__pics-item-img" src={ moscowImage } />
                        <span className="destinations__pics-item-location">
                            Moscow, Russia
                        </span>
                    </li>
                    <li className="destinations__pics-item">
                        <img className="destinations__pics-item-img" src={ parisImage } />
                        <span className="destinations__pics-item-location">
                            Paris, France
                        </span>
                    </li>
                    <li className="destinations__pics-item">
                        <img className="destinations__pics-item-img" src={ rioImage } />
                        <span className="destinations__pics-item-location">
                            Rio, Brasil
                        </span>
                    </li>
                    <li className="destinations__pics-item">
                        <img className="destinations__pics-item-img" src={ romeImage } />
                        <span className="destinations__pics-item-location">
                            Rome, Italy
                        </span>
                    </li>
                    <li className="destinations__pics-item">
                        <img className="destinations__pics-item-img" src={ shanghaiImage } />
                        <span className="destinations__pics-item-location">
                            Shanghai, China
                        </span>
                    </li>
                    <li className="destinations__pics-item">
                        <img className="destinations__pics-item-img" src={ sydneyImage } />
                        <span className="destinations__pics-item-location">
                            Sydney, Australia
                        </span>
                    </li>
                </ul>
            </div>
        </>

    )
}

export default HomePage