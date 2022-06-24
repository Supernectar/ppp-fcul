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
