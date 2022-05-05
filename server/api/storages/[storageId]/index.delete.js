export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	try {
		const decoded = await jwt.verify(token, 'secretkey');

		let { id } = req.params;

		let storage = await Storage.findById(id);

		if (!storage) {
			res.status = 404;
			res.send('storage not found');
		} else if (storage.owner != decoded.user._id) {
			res.json({
				error: 'You must be the owner to change this storage'
			});
		} else {
			let storage = await Storage.deleteOne({ _id: id });

			res.json(storage);
		}
	} catch (err) {
		console.log(err);
		res.json(err);
	}

	return event.res.jsonResponse;
});
