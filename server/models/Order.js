import mongoose from 'mongoose';

export default mongoose.model(
	'Order',
	new mongoose.Schema({
		status: String,
		departureDate: Date,
		arrivalDate: Date,
		consumer: Consumer
	})
);
