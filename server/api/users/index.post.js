import User from '~~/server/utils/models/User';

export default defineEventHandler(async (event) => {
	try {
		const { email, password } = useBody(event);
		try {
			let user = await User.create({
				email,
				password
			});
		} catch (err) {
			event.res.jsonResponse.error = {
				message: err._message,
				errors: err.errors
			};
		}
	} catch (err) {
		event.res.jsonResponse.error = {
			message: err
		};
	}

	return event.res.jsonResponse;
});
