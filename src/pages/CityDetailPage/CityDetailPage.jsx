import "./CityDetailPage.scss"
import HagiaSophiaIstanbul from "../../assets/images/Hagia-Sophia-Istanbul.jpg"
function CityDetailPage() {
    return (
        <>
            <div className="city">
                <h1 className="city__name">
                    Istanbul
                </h1>
                <div className="city__landmark">
                    <img className="city__landmark-img" src={HagiaSophiaIstanbul}/>
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
                <ul className="attractions__pics">
                    <li className="attractions__pics-item">
                        <img className="attractions__pics-item-img" src={HagiaSophiaIstanbul} />
                        <h2 className="attractions__pics-item-location">
                            Topkapi Palace
                        </h2>
                    </li>
                    <li className="attractions__pics-item">
                        <img className="attractions__pics-item-img" src={HagiaSophiaIstanbul}/>
                        <h2 className="attractions__pics-item-location">
                            Blue Mosque
                        </h2>
                    </li>
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
                </ul>
            </div>
        </>
    )
}

export default CityDetailPage