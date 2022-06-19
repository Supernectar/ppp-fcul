import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
  'Order',
  new Schema({
    numberItems: String,
    price: String,
    status: String,
    departureDate: String,
    arrivalDate: String,
    itineraries: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Itinerary'
      }
    ],
    items: []
  })
);
