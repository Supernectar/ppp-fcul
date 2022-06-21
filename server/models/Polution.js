import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
  'Polution',
  new Schema({
    nameId: {
      type: String
    },
    type: String,
    quantity: Number,
    unit: String
  })
);
