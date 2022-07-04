import mongoose from 'mongoose';

export default mongoose.model(
  'Resource',
  new mongoose.Schema({
    // name: String,
    name: {
      type: String
    },
    // type: String,
    type: {
      type: String
    },
    // unit: String
    unit: {
      type: String
    }
  })
);
