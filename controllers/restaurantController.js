import Restaurant from '../models/Restaurant.js';

// Get all restaurants
export const getRestaurants = async (req, res) => {
  try {
    const data = await Restaurant.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Create a restaurant
export const createRestaurant = async (req, res) => {
  try {
    const newRestaurant = new Restaurant(req.body);
    const saved = await newRestaurant.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error: error.message });
  }
};

// Get single restaurant by ID
export const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (restaurant) {
      res.json(restaurant);
    } else {
      res.status(404).json({ message: 'Restaurant not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid ID', error: error.message });
  }
};

// Update a restaurant by ID
export const updateRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (restaurant) {
      restaurant.name = req.body.name ?? restaurant.name;
      restaurant.location = req.body.location ?? restaurant.location;
      restaurant.cuisine = req.body.cuisine ?? restaurant.cuisine;
      restaurant.rating = req.body.rating ?? restaurant.rating;

      const updated = await restaurant.save();
      res.json(updated);
    } else {
      res.status(404).json({ message: 'Restaurant not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid data or ID', error: error.message });
  }
};

// Delete a restaurant by ID
export const deleteRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (restaurant) {
      await restaurant.deleteOne();
      res.json({ message: 'Restaurant deleted' });
    } else {
      res.status(404).json({ message: 'Restaurant not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid ID', error: error.message });
  }
};
