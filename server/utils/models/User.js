import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
	'User',
	new Schema({
		username: {
			type: String,
			unique: true
		},
		name: String,
		password: String,
		email: String,
		phone: String,
		creditCard: String,
		nif: Number,
		address: {
			type: Schema.Types.ObjectId,
			ref: 'Address'
		},
		consumerData: {
			orders: String,
			shippingAddresses: [
				{
					type: Schema.Types.ObjectId,
					ref: 'Address'
				}
			]
		},
		supplierData: {
			InstitutionName: String,
			storages: [
				{
					type: Schema.Types.ObjectId,
					ref: 'Storage'
				}
			]
		},
		transporterData: {
			vehicles: [
				{
					type: Schema.Types.ObjectId,
					ref: 'Transport'
				}
			]
		}
	})
);
