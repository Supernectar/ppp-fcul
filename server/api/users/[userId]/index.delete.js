export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;
	try {
		const authHeader = req.headers.authorization;
		const token = authHeader && authHeader.split(' ')[1];
		decoded = jwt.decode(token, 'secretkey');

		const { id } = req.params;
		if (id != decoded.user._id) {
			res.json({
				error: 'You must be the owner to change this profile'
			});
		} else {
			const user = await User.deleteMany({ _id: id });
			res.json(user);
		}
	} catch (err) {
		res.json(err);
	}
	return event.res.jsonResponse;
});
