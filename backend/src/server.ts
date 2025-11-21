import express from 'express';

import cors from 'cors';
import helmet from 'helmet';
import connectDB from './utils/db/connect.js';
import dotenv from 'dotenv';
import errorHandler from './middleware/errorHandler.js';
import {productRoutes, authRoutes } from './routes/productRoutes.js';
import rateLimit from 'express-rate-limit';
import { createClient } from 'redis';
import RedisStore from 'rate-limit-redis';



dotenv.config();

const redisUrl = process.env.REDIS_URL;
if (!redisUrl) {
  throw new Error("REDIS_URL is not defined in environment variables");
}


const redisClient = createClient({ url: redisUrl });
await redisClient.connect();

const ratelimitOptions = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  handler: (req: express.Request, res: express.Response) => {
    res.status(429).json({ success: false, message: "Too many requests" });
  },
  store: new RedisStore({
    sendCommand: (...args: string[]) => redisClient.sendCommand(args),
  }),
});

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



app.use(ratelimitOptions);

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