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
            error: "Failed to retrieve all cities" })
    }
}

const getSingleCity = async (req, res) => {
    try{
        const cityId = req.params.cityId;
        const city = await knex("cities")
        .select('id', 'city_name', 'country')
        .where({ id: cityId })
        .first();

        if (!city) {
            return res.status(404).json({ error: `city with id ${cityId} not found` });
        }
        res.status(200).json(city);

    } catch (err) {
        res.status(500).json({ 
            error: `Failed to retrieve city with id :${req.params.cityId}` })
    }

}

export {
    getCities,
    getSingleCity,
}
