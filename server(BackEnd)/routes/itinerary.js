import express from 'express';
import * as itineraryController from '../controllers/itinerary-controllers.js';

const router = express.Router();

router
    .post('/', itineraryController.generateItinerary);

export default router;
