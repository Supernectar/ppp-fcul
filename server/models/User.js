import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
  'User',
  new Schema({
    username: {
      type: String,
      unique: true
    },
    name: String,
    // password: String,
    password: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(v);
        },

        message: (props) => `${props.value} is not a valid code format!`
      }
    },
    email: {
      type: String,
      required: true
      // validate: {
      //   validator: function (v) {
      //     return \b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b.test(v);
      //   },

      //   message: (props) => `${props.value} is not a valid code format!`
      // }
    },
    // email: String,
    phone: String,
    creditCard: String,
    nif: String,
    addresses: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Address'
      }
    ],
    consumerData: {
      address: {
        type: Schema.Types.ObjectId,
        ref: 'Address'
      },
      orders: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Order'
        }
      ],
      cart: [
        {
          product: {
            type: Schema.Types.ObjectId,
            ref: 'Product'
          },
          quantity: Number
        }
      ],
      wishlist: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Item'
        }
      ]
    },
    supplierData: {
      address: {
        type: Schema.Types.ObjectId,
        ref: 'Address'
      },
      InstitutionName: String,
      storages: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Storage'
        }
      ],
      orders: [
        {
          date: { type: Date },
          consumer: { type: Schema.Types.ObjectId, ref: 'User' },
          transport: { type: Schema.Types.ObjectId, ref: 'Transport' },
          quantity: { type: Number },
          product: { type: Schema.Types.ObjectId, ref: 'Product' },
          status: { type: Schema.Types.ObjectId, ref: 'Status' }
        }
      ]
    },
    transporterData: {
      address: {
        type: Schema.Types.ObjectId,
        ref: 'Address'
      },
      vehicles: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Transport'
        }
      ],
      orders: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Order'
        }
      ]
    },
    preferences: {
      profileIconBgColor: {
        type: String,
        default: '#000000'
      },
      profileIconTextColor: {
        type: String,
        default: '#ffffff'
      }
    },
    notification: [
      {
        name: { type: String },
        reference_id: { type: Schema.Types.ObjectId },
        type: { type: String }
      }
    ]
  })
);
