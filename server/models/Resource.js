import mongoose from 'mongoose';

export default mongoose.model(
  'Resource',
  new mongoose.Schema({
    nameId: {
      type: String
    },
    quantity: Number,
    unit: String
  })
);
