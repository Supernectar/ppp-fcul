import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
	'Product',
	new Schema({
		itemId: {
			type: Schema.Types.ObjectId,
			ref: 'Item',
			required: true
		},
		price: {
			type: Number,
			required: true
		},
		unit: {
			type: String,
			required: true
		},
		quantity: {
			type: Number,
			required: true
		}
	})
);
