import express from "express";
import * as cityController from "../controllers/city-controllers.js";

const router = express.Router();

router
    .get('/', cityController.getCities)
    .get('/:cityId', cityController.getSingleCity)

export default router;