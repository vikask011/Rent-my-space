import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import spaceRoutes from './routes/spaceRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();

// Setup CORS
const allowedOrigins = [
  'https://rent-my-space.vercel.app',
  'https://rent-my-space-541k.vercel.app',
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB Error:", err));

// Routes
app.use('/api/spaces', spaceRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/auth', authRoutes);

export default app;
