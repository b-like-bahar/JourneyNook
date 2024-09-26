import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./ItineraryPage.scss"

function ItineraryPage() {
    document.title = "JourneyNook - Itinerary";
    const { cityId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const { itinerary, cityName } = location.state || {};

    useEffect(() => {
        if (!itinerary) {
            navigate(`/city/${cityId}`);
        }
    }, [itinerary, navigate, cityId]);

    if (!itinerary) {
        return null;
    }

    return (
        <div className="itinerary">
            <h1 className="itinerary__title">Your Itinerary for {cityName}</h1>
            <div className="itinerary__content large">
                <p dangerouslySetInnerHTML={{ __html: itinerary.replace(/\n/g, '<br>') }}></p>
            </div>
            <Link className="itinerary__btn" to="`/">
                Done
            </Link>
        </div>
    );
}

export default ItineraryPage;









