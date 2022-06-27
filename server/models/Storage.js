import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
  'Storage',
  new Schema({
    name: {
      type: String,
      required: true
    },
    popularity: {
      type: Number,
      default: 0
    },
    address: {
      type: Schema.Types.ObjectId,
      ref: 'Address',
      required: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    isPublic: {
      type: Boolean,
      required: true
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product'
      }
    ]
  })
);
