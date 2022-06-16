import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
  'Transport',
  new Schema({
    id: {
      type: Number,
      required: true,
      unique: true
    },
    marca: {
      type: String,
      required: true
    },
    modelo: {
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
