import mongoose from 'mongoose';

export default mongoose.model(
  'Transport',
  new mongoose.Schema({
    id: Number,
    max_load: Number,
    status: String,
    plate: String
  })
);
