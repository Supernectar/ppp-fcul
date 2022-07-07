import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
  'Cart',
  new Schema({
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product'
        },
        quantity: Number
      }
    ]
  })
);
