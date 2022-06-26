import mongoose from 'mongoose';

const { Schema } = mongoose;
export default mongoose.model(
  'Item',
  new Schema({
    name: String,
    weight: Number,
    type: String,
    subtype: String,
    brand: String,
    website: String,
    description: String,
    producer: String,
    isConsumable: Boolean,
    rating: {
      type: Number,
      default: 0
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    },
    attributes: {
      type: Object
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
        polution: {
          type: Schema.Types.ObjectId,
          ref: 'Resource'
        }
      }
    ]
  })
);
