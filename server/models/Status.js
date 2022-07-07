import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
  'Status',
  new Schema({
    name: String
  })
);
