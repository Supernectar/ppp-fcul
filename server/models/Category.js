import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
  'Category',
  new Schema({
    nameId: {
      type: String,
      unique: true
    },
    name: {
      type: String
    },
    description: String,
    parent: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      default: null
    },
    children: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Category'
      }
    ],
    attributes: [
      {
        type: String
      }
    ]
  })
);
