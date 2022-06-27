import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
  'Polution',
  new Schema({
    name: String,
    unit: String
  })
);
