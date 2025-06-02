// routes/restaurantRoutes.js
import express from 'express';
import { getRestaurants, createRestaurant } from '../controllers/restaurantController.js';

const router = express.Router();

// GET all restaurants
router.get('/', getRestaurants);

// POST a new restaurant
router.post('/', createRestaurant);

export default router;
