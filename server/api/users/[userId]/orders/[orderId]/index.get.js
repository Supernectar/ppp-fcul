import User from '~~/server/utils/models/User';

export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;
	// const id = req.params.username;
	// Order.findOne({ username: id }).then((result) => res.send(result));

	try {
		const { userId } = event.context.params;
		let user = await User.find({ _id: userId });
		event.res.jsonResponse.context = event.context.params;
		event.res.jsonResponse.data = {
			items: user
		};
	} catch (err) {
		console.log(err);
		event.res.jsonResponse.error = err;
	}

	return event.res.jsonResponse;

	return event.res.jsonResponse;
});
