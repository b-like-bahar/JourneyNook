export function createTripPrompt(days, budget, tripType, cityName) {

    let content = `Generate a ${days}-day itinerary for a ${tripType} trip in ${cityName}. 
                The total trip budget is ${budget} dollars.
                Some days can be more expensive, and others less expensive, but ensure the total cost for the trip stays within the overall budget. 
                Provide activities, meals, and experiences for each day without listing individual costs but ensuring the total trip spend remains within the total budget.`;

    if (tripType === "family") {
        content = `Generate a ${days}-day family-friendly itinerary in ${cityName}. 
                The total trip budget is ${budget} dollars. 
                Include activities suitable for children, affordable dining, and safe accommodations. 
                Some days can be more expensive, and others less expensive, but make sure the total cost for the trip stays within the overall budget.`;
    } else if (tripType === "couple") {
        content = `Generate a ${days}-day romantic itinerary for a couple in ${cityName}. 
                The total trip budget is ${budget} dollars.
                Include romantic activities, scenic views, and intimate dining experiences. 
                Some days may be more expensive, and others less expensive, but ensure the overall trip cost remains within budget.`;
    } else if (tripType === "friends") {
        content = `Generate a ${days}-day fun itinerary for a group of friends in ${cityName}. 
                The total trip budget is ${budget} dollars.
                Include group activities, social hangouts, and nightlife. 
                Some days may go over or under the daily budget, but the total cost should stay within the overall trip budget.`;
    } else if (tripType === "solo") {
        content = `Generate a ${days}-day itinerary for a solo traveler in ${cityName}. 
                The total trip budget is ${budget} dollars.
                Include activities such as exploring local culture, visiting landmarks, and dining experiences for one. 
                Some days may be more expensive and others less expensive, but ensure the overall trip cost stays within the total budget.`;
    }
    return content;
}

export const tripInputValidator = (req, res, next) => {
    const { days, budget, tripType } = req.body;

    if (!days || isNaN(days) || days <= 0 || !Number.isInteger(Number(days)) || days > 60) {
        return res.status(400).json({ error: "Days must be a positive integer number between 1 and 60." });
    }

    if (!budget || isNaN(budget) || budget <= 0 || budget > 1000000) {
        return res.status(400).json({ error: "Budget must be a positive number between 1 and 1,000,000." });
    }

    const validTripTypes = ["family", "couple", "friends", "solo"];
    if (!validTripTypes.includes(tripType)) {
        return res.status(400).json({ error: "There is no such trip type" });
    }

    next();
};
