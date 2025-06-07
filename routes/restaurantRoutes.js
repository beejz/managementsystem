// routes/restaurantRoutes.js
import express from 'express';
import { 
  getRestaurants, 
  createRestaurant, 
  getRestaurantById, 
  updateRestaurant, 
  deleteRestaurant 
} from '../controllers/restaurantController.js';

const router = express.Router();

// GET all restaurants
router.get('/', getRestaurants);

// POST a new restaurant
router.post('/', createRestaurant);

// GET a single restaurant by ID
router.get('/:id', getRestaurantById);

// PUT update a restaurant by ID
router.put('/:id', updateRestaurant);

// DELETE a restaurant by ID
router.delete('/:id', deleteRestaurant);

export default router;
