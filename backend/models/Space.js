import mongoose from 'mongoose';

const spaceSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  imageUrl: String,
}, { timestamps: true });

export default mongoose.model('Space', spaceSchema);
