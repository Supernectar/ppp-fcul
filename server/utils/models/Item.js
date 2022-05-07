import mongoose from 'mongoose';
const { Schema } = mongoose;
// const Polution = require('./Polution');
// const Resource = require('./Resource');

export default mongoose.model(
	'Item',
	new Schema({
		name: String,
		weight: Number,
		type: String,
		subtype: String,
		brand: String,
		website: String,
		description: String,
		producer: String,
		exp_date: Date
		// polution: [],
		// resource: Resource,
	})
);
