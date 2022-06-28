import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
  'Address',
  new Schema({
    street: String,
    country: String,
    city: String,
    zipCode: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  })
);
