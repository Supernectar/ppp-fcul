import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
  'Polution',
  new Schema({
    name: {
      type: String,
      required: [true, 'name required']
    },
    unit: {
      type: String,
      required: [true, 'unit required']
    }
  })
);
