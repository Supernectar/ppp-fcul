import Storage from '~~/server/models/Storage';
import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;
	const { name, location } = JSON.parse(await useBody(event));
	const { userId } = event.context.params;

	try {
		const storage = await Storage.create({
			name,
			location
		});

		// let b = await User.updateOne({ _id: userId });

		const user = await User.updateOne(
			{ _id: userId },
			{
				$push: {
					'supplierData.storages': storage._id
				}
			}
		);
		return storage;
	} catch (err) {
		return err;
	}
});
