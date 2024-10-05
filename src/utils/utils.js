import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

class Api {
    constructor() {
        this.baseUrl = baseUrl;
    }

    async getAllCities() {
        try {
            const response = await axios.get(`${this.baseUrl}/cities`);
            return response.data;
        } catch (err) {
            console.log(`Failed to get all cities.`);
        }
    }

    async getAttractionsGivenCityId(cityId) {
        try {
            const response = await axios.get(
                `${this.baseUrl}/cities/${cityId}/attractions`
            );
            return response.data;
        } catch (err) {
            console.log(
                `Failed to get all attractions with city id: ${cityId}.`
            );
        }
    }

    async getAttractionDetails(attractionId) {
        try {
            const response = await axios.get(`${this.baseUrl}/attractions/${attractionId}`);
            return response.data;
        } catch (err) {
            console.log(`Failed to get attraction details of the attraction with id: ${attractionId}.`);
        }
    }


    async generateItinerary(cityName, days, budget, numberOfPeople, tripType) {
        try {
            const response = await axios.post(`${this.baseUrl}/itinerary`, {
                cityName,
                days,
                budget,
                numberOfPeople,
                tripType
            });
            return response.data;
        } catch (err) {
            console.error("Failed to generate itinerary");
        }
    }
}

export { Api, baseUrl };