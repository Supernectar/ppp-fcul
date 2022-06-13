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
    address: {
      type: Schema.Types.Object,
      ref: 'Address'
    },
    consumerData: {
      orders: [
        {
          type: Schema.Types.ObjectId
        }
      ],
      shippingAddresses: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Address'
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
      ]
    },
    supplierData: {
      InstitutionName: String,
      storages: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Storage'
        }
      ]
    },
    transporterData: {
      vehicles: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Transport'
        }
      ]
    }
  })
);
