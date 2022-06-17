import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
  'Transport',
  new Schema({
    brand: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    maxLoad: {
      type: Number,
      required: true
    },
    status: {
      type: String
    },
    plate: {
      type: String,
      required: true
    }
  })
);
