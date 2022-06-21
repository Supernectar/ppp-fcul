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
    exp_date: Date,
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
        type: Schema.Types.ObjectId,
        ref: 'Polution'
      }
    ],
    resources: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Resource'
      }
    ]
  })
);
