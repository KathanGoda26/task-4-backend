import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import orderRoutes from './routes/orderRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import connectDB from './config/db.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
}));
app.use(express.json());

// Routes
app.use('/api/orders', orderRoutes);
app.use('/api/payment', paymentRoutes);

// MongoDB Connection
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


