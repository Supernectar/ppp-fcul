import mongoose from 'mongoose';
//import Item from '~~/server/utils/models/Item';
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
