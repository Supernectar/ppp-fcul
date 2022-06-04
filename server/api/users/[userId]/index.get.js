import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;
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
});
