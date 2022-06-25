import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
  'Product',
  new Schema({
    productLine: {
      type: Schema.Types.ObjectId,
      ref: 'ProductLine',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    storage: {
      type: Schema.Types.ObjectId,
      ref: 'Storage'
    },
    resources: [
      {
        quantity: Number,
        resource: {
          type: Schema.Types.ObjectId,
          ref: 'Resource'
        }
      }
    ],
    polutions: [
      {
        quantity: Number,
        polution: {
          type: Schema.Types.ObjectId,
          ref: 'Polution'
        }
      }
    ],
    consumable: Boolean,
    stripeId: String,
    expirationDate: Date
  })
);
