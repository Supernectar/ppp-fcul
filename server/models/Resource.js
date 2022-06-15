import mongoose from 'mongoose';

export default mongoose.model(
  'Resource',
  new mongoose.Schema({
    id: Number,
    name: String,
    amount: Number,
    unit: String
  })
);
