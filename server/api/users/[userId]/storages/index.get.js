export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;

	try {
		const { id } = req.params;

		let storages = (await Storage.find()).filter(
			(storage) =>
				storage.visibility == 'public' ||
				storage.owner == id
		);

		res.json(storages);
	} catch (err) {
		res.json(err);
	}
	return event.res.jsonResponse;
});
