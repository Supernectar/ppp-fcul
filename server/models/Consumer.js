import mongoose from 'mongoose';

export default mongoose.model(
	'Consumer',
	new mongoose.Schema({
		morada: String,
		distrito: String,
		concelho: String,
		cidade: String
	})
);
