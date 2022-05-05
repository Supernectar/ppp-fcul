export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	try {
		const decoded = await jwt.verify(token, 'secretkey');

		let { name, location } = req.body;

		let storage = await Storage.create({
			name: name,
			location: location,
			owner: decoded.user
		});

		let user = await User.updateOne(decoded.user, {
			$push: { storages: storage }
		});

		res.json(storage);
	} catch (err) {
		res.json(err);
	}
});
