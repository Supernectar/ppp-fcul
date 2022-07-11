import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
  'Order',
  new Schema(
    {
      // numberItems: String,
      // price: String,
      consumer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      transport: {
        type: Schema.Types.ObjectId,
        ref: 'Transport'
      },
      supplier: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      status: {
        type: Schema.Types.ObjectId,
        ref: 'Status'
      },
      departureDate: Date,
      // arrivalDate: Date,
      // itineraries: [
      //   {
      //     type: Schema.Types.ObjectId,
      //     ref: 'Itinerary'
      //   }
      // ],
      from: {
        type: Schema.Types.ObjectId,
        ref: 'Address'
      },
      to: {
        type: Schema.Types.ObjectId,
        ref: 'Address'
      },
      products: [
        {
          quantity: { type: Number },
          product: {
            type: Schema.Types.ObjectId,
            ref: 'Product'
          }
        }
      ]
    },
    {
      timestamps: true
    }
  )
);
