import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
  'ProductLine',
  new Schema({
    item: {
      type: Schema.Types.ObjectId,
      ref: 'Item',
      required: true
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product'
      }
    ],
    price: {
      type: Number,
      required: true
    },
    currencyUnit: {
      type: String,
      required: true
    },
    supplier: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  })
);
