import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
  'Transport',
  new Schema({
    brand: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    maxLoad: {
      type: Number,
      required: true
    },
    status: {
      type: String
    },
    // quantity: {
    //   type: Number
    // },
    resources: [
      {
        quantity: Number,
        resource: {
          type: Schema.Types.ObjectId,
          ref: 'Resource'
        }
      }
    ],
    polutions: [
      {
        quantity: Number,
        polution: {
          type: Schema.Types.ObjectId,
          ref: 'Polution'
        }
      }
    ],
    plate: {
      type: String,
      required: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  })
);
