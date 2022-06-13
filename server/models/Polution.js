import mongoose from 'mongoose';

export default mongoose.model(
  'Polution',
  new mongoose.Schema({
    id: Number,
    type: String,
    amount: Number,
    unit: String
  })
);
