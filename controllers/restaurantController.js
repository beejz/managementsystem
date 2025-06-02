import Restaurant from '../models/Restaurant.js';

// Get all restaurants
export const getRestaurants = async (req, res) => {
  const data = await Restaurant.find();
  res.json(data);
};

// Create a restaurant
export const createRestaurant = async (req, res) => {
  const newRestaurant = new Restaurant(req.body);
  const saved = await newRestaurant.save();
  res.status(201).json(saved);
};
