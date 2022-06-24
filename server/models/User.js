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
    password: String,
    email: String,
    phone: String,
    creditCard: String,
    nif: String,
    addresses: [
      {
        type: Schema.Types.Object,
        ref: 'Address'
      }
    ],
    consumerData: {
      address: {
        type: Schema.Types.Object,
        ref: 'Address'
      },
      orders: [
        {
          type: Schema.Types.ObjectId
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
        type: Schema.Types.Object,
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
          type: Schema.Types.ObjectId
        }
      ]
    },
    transporterData: {
      address: {
        type: Schema.Types.Object,
        ref: 'Address'
      },
      vehicles: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Transport'
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
    }
  })
);
