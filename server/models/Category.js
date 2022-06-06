import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
	'Category',
	new Schema({
		name: {
			type: String,
			unique: true
		},
		description: String,
		parent: {
			type: Schema.Types.ObjectId,
			ref: 'Category',
			default: null
		},
		children: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Category'
			}
		],
		attributes: [
			{
				type: String
			}
		]
	})
);
