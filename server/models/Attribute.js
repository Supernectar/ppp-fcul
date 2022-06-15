import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
  'Attribute',
  new Schema({
    name: String,
    type: String,
    value: String
  })
);
