import User from '~~/server/utils/models/User';

export default defineEventHandler(async (event) => {
	try {
		const { email, password, username } = await useBody(event);

		try {
			let user = await User.create({
				email,
				password,
				username
			});
		} catch (err) {
			event.res.jsonResponse.error = {
				message: err._message,
				errors: err.errors
			};
			console.log(err);
		}
	} catch (err) {
		event.res.jsonResponse.error = {
			message: err
		};
	}

	return event.res.jsonResponse;
});
