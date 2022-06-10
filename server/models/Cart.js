import mongoose from 'mongoose';

export default mongoose.model(
	'Cart',
	new mongoose.Schema({
		id: Number,
		products: [
			{
				product: {
					type: Schema.Types.ObjectId,
					ref: 'Product'
				},
				quantity: Number
			}
		]
	})
);
