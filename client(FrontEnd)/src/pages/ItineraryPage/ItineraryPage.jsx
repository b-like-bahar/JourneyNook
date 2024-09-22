import './ItineraryPage.scss';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

function ItineraryPage() {
    const { cityId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const { itinerary, cityName } = location.state || {};

    if (!itinerary) {
        navigate(`/city/${cityId}`);
        return null;
    }

    return (
        <div className="itinerary">
            <h1 className="itinerary__title">Your Itinerary for {cityName}</h1>
            <div className="itinerary__content">
                <p>{itinerary}</p>
            </div>
        </div>
    );
}

export default ItineraryPage;