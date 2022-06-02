import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
	'Category',
	new Schema({
		name: String,
		description: String,
		level: Number,
		isRoot: {
			type: Boolean,
			default: false
		},
		attributes: [],
		categories: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Category'
			}
		]
	})
);
