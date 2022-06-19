import mongoose from 'mongoose';
import Polution from '~~/server/models/Polution';
import Resource from '~~/server/models/Resource';
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
    polution: {}
    // resource: Resource,
  })
);
