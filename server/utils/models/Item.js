import mongoose from "mongoose";
import Polution from "~~/server/utils/models/Polution";
import Resource from "~~/server/utils/models/Resource";
const { Schema } = mongoose;
// const Polution = require('./Polution');
// const Resource = require('./Resource');

export default mongoose.model(
  "Item",
  new Schema({
    name: String,
    weight: Number,
    type: String,
    subtype: String,
    brand: String,
    website: String,
    description: String,
    producer: String,
    exp_date: Date,
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    // polution: [],
    // resource: Resource,
  })
);
