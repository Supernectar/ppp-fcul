import mongoose from 'mongoose';
import Polution from '~~/server/models/Polution';
import Resource from '~~/server/models/Resource';
const { Schema } = mongoose;
export default mongoose.model(
  'Coordinate',
  new Schema({
    x: Number,
    y: Number,
    z: Number
  })
);
