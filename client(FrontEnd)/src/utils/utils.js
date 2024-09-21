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

}

export { Api, baseUrl };