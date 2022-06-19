import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
  'Itinerary',
  new Schema({
    transport: {
      type: Schema.Types.ObjectId,
      ref: 'Transport',
      required: true
    },
    coordinates: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Coordinate'
      }
    ],
    totalDistance: Number,
    departureDate: String,
    arrivalDate: String
  })
);
