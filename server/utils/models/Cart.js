import mongoose from 'mongoose';

export default mongoose.model(
	'Cart',
	new mongoose.Schema({
		id: Number
	})
);
