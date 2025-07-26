import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import spaceRoutes from './routes/spaceRoutes.js'; // ✅ Existing space routes
import paymentRoutes from './routes/paymentRoutes.js'; // ✅ Stripe route
import authRoutes from './routes/authRoutes.js'; // ✅ Add this line

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection failed:', err));

// ✅ Use Routes
app.use('/api/spaces', spaceRoutes);
app.use('/api/payment', paymentRoutes); // ✅ Stripe
app.use('/api/auth', authRoutes); // ✅ Google Auth

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
