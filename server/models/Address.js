import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
  'Address',
  new Schema({
    street: {
      type: String,
      required: [true, 'street required'],
      minlength: [6, 'Minimun code length 6 characters']
    },
    country: String,
    city: String,
    zipCode: {
      type: String,
      required: [true, 'zipCode required'],
      //sync validation
      validate: {
        validator: function (v) {
          return /^[0-9]{4}-[0-9]{3}$/.test(v);
        },

        message: (props) => `${props.value} is not a valid code format!`
      }
    },
    coordinates: {
      lat: Number,
      lng: Number
    }
  })
);
