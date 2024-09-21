import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

class Api {
    constructor() {
        this.baseUrl = baseUrl;
    }
}