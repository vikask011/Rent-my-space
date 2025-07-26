import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import spaceRoutes from './routes/spaceRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
const app = express();

// ✅ Allow only specific origins
const allowedOrigins = [
  'https://rent-my-space.vercel.app',
  'https://rent-my-space-541k.vercel.app', // <-- Replace with your actual frontend domain
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(express.json());

// ✅ MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection failed:', err));

// ✅ Routes
app.use('/api/spaces', spaceRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/auth', authRoutes);

// ✅ Optional: Error handling middleware
app.use((err, req, res, next) => {
  console.error('🔥 Server error:', err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
