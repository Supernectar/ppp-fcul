import mongoose from 'mongoose';

const { Schema } = mongoose;
export default mongoose.model(
  'Item',
  new Schema({
    name: {
      type: String,
      required: [true, 'name required'],
      minlength: [3, 'Minimun name length 3 characters']
    },
    weight: {
      type: Number
    },
    website: String,
    // description: String,
    description: {
      type: String,
      required: [true, 'description required']
    },
    // producer: String,
    producer: {
      type: String,
      required: [true, 'producer required']
    },
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

    items: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Item'
      }
    ],
    imgPath: String
  })
);
