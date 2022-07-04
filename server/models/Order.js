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
      transporter: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      status: {
        type: Schema.Types.ObjectId,
        ref: 'Status'
      },
      departureDate: String,
      arrivalDate: String,
      // itineraries: [
      //   {
      //     type: Schema.Types.ObjectId,
      //     ref: 'Itinerary'
      //   }
      // ],
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
