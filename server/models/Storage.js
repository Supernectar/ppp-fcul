import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
	'Storage',
	new Schema({
		name: {
			type: String,
			required: true,
			unique: true
		},
		popularity: {
			type: Number,
			default: 0
		},
		location: {
			type: Number,
			required: true
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		},
		visibility: {
			type: String,
			default: 'private'
		},
		products: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Product'
			}
		]
	})
);
