import User from '~~/server/utils/models/User';

export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;

	const { userId } = event.context.params;
	const { username, name } = await useBody(event);

	if (userId !== event.req.userId) {
		event.res.jsonResponse.error = {
			message: 'You must be the owner to change this profile'
		};
	} else {
		try {
			let user = await User.updateOne(
				{ _id: userId },
				{ username, name }
			);
			event.res.jsonResponse.data = {
				items: [user]
			};
		} catch (err) {
			console.log(err);
			event.res.jsonResponse.error = {
				message: err
			};
		}
	}
	return event.res.jsonResponse;
});
