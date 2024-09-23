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

    // Separate the daily itinerary from the total trip cost
    const itinerarySections = itinerary
        .split(/\n(?=Day \d)/)  // Split on each new day
        .filter(section => section.trim())  // Remove empty sections
        .map((section, index) => {
            // Check if this section contains a "Total Cost for Day"
            const [dayContent, dayCost] = section.includes("Total Cost for Day")
                ? section.split(/Total Cost for Day.*\$/)
                : [section, null];

            return (
                <div key={index} className="itinerary__content-section">
                    <p>{dayContent.trim()}</p>
                    {dayCost && (
                        <p className="itinerary__day-cost"><strong>Total Cost for Day {index + 1}: ${dayCost.trim()}</strong></p>
                    )}
                </div>
            );
        });

    // Separate final total trip cost from the rest if it exists
    const totalTripCost = itinerary.match(/Total Cost for the trip: \$\d+/) || '';

    return (
        <div className="itinerary">
            <h1 className="itinerary__title">Your Itinerary for {cityName}</h1>
            <div className="itinerary__content large">
                {itinerarySections}
            </div>
            {totalTripCost && (
                <div className="itinerary__total-cost">
                    <p><strong>{totalTripCost[0]}</strong></p>
                </div>
            )}
        </div>
    );
}

export default ItineraryPage;



