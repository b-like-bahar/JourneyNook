import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

const getCities = async (req, res) => {
    try {
        const allCities = await knex('cities')
            .select('id', 'city_name', 'country', 'city_image_path')
        res.status(200).json(allCities);
    } catch (err) {
        res.status(500).json({ 
            message: `Failed to retrieve all cities: ${err.message}` })
    }
}

export default getCities;
