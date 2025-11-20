import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import connectDB from './utils/db/connect.js';
import dotenv from 'dotenv';
import errorHandler from './middleware/errorHandler.js';
import {productRoutes, authRoutes } from './routes/productRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS configuration
const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Vite default port
    credentials: true, // Allow cookies
    optionsSuccessStatus: 200
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());

app.use(errorHandler);

app.use('/api', productRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error('Failed to connect to the database', error);
  }
});