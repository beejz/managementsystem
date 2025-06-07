import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import restaurantRoutes from './routes/restaurantRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Allow all origins, methods, headers
app.use(express.json()); // Parse JSON bodies

// Simple logger middleware for debugging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

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
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
