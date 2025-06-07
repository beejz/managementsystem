// server.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import restaurantRoutes from './routes/restaurantRoutes.js';

dotenv.config(); // Load .env variables

const app = express();

// Middleware
// Allow all origins (*) to fix 403 Forbidden when testing from Postman
app.use(cors()); // Allow all origins, all methods, all headers

app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
connectDB();

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/restaurants', restaurantRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
