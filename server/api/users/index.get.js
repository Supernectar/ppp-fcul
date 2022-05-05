import User from '~~/server/utils/models/User';

export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;

	const users = await User.find();

	event.res.jsonResponse.data = {
		items: users
	};
	return event.res.jsonResponse;
});
