import "./HomePage.scss"

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
            <p className="hero__about">
                At JourneyNook, our purpose is to inspire and guide travelers through every step of their journey. 
                Whether you’re dreaming of your next destination or planning every detail of your trip, 
                JourneyNook is here to make your travel experience seamless and enjoyable.
            </p>
            </div>
        </>

    )
}

export default HomePage