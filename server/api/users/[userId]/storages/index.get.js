export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;
	const authHeader = req.headers.authorization;
	const token = authHeader && authHeader.split(' ')[1];
	try {
		const decoded = await jwt.verify(token, 'secretkey');

		const storages = (await Storage.find()).filter(
			(storage) =>
				storage.visibility == 'public' ||
				storage.owner == decoded.user._id
		);

		res.json(storages);
	} catch (err) {
		res.json(err);
	}
});
