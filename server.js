// server.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import restaurantRoutes from './routes/restaurantRoutes.js';
import cors from 'cors';

dotenv.config(); // Load .env variables

const app = express();

// CORS config - allows access from localhost:3000 (React frontend)
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json()); // Enable JSON body parsing

// Connect to MongoDB
connectDB();

// Root endpoint
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Restaurant API routes
app.use('/api/restaurants', restaurantRoutes);

// Catch all unhandled routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running on port ${PORT}`)
);
