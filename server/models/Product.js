import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
  'Product',
  new Schema({
    item: {
      type: Schema.Types.ObjectId,
      ref: 'Item',
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    currencyUnit: {
      type: String,
      required: true
    },
    name: {
      type: String
    },
    quantity: {
      type: Number,
      required: [true, 'street required']
    },
    storages: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Storage'
      }
    ],
    supplier: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    polutions: [
      {
        quantity: Number,
        polution: {
          type: Schema.Types.ObjectId,
          ref: 'Polution'
        }
      }
    ],
    resources: [
      {
        quantity: Number,
        resource: {
          type: Schema.Types.ObjectId,
          ref: 'Resource'
        }
      }
    ],
    stripeId: {
      type: String
    },
    expirationDate: Date
  })
);
