import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
  'Category',
  new Schema({
    name: {
      type: String,
      unique: true
    },
    description: String,
    parent: {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    },
    children: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Category'
      }
    ],
    imgPath: String,
    color: {
      type: String,
      default: '#34a512'
    },
    attributes: [
      {
        type: String
      }
    ]
  })
);
