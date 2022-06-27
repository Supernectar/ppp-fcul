import mongoose from 'mongoose';

export default mongoose.model(
  'Resource',
  new mongoose.Schema({
    name: String,
    type: String,
    unit: String
  })
);
