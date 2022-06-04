import mongoose from 'mongoose';

export default mongoose.model(
	'Polution',
	new mongoose.Schema({
		id: Number,
		tyoe: String,
		amount: Number,
		unit: String
	})
);
