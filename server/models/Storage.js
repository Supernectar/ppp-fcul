import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
  'Storage',
  new Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    popularity: {
      type: Number,
      default: 0
    },
    address: {
      type: Schema.Types.Object,
      ref: 'Address'
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    visibility: {
      type: String,
      default: 'private'
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product'
      }
    ]
  })
);
