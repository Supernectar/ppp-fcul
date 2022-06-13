import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
	try {
		const {
			username,
			name,
			password,
			email,
			phone,
			creditCard,
			nif,
			address
		} = await useBody(event);

		try {
			const user = await User.create({
				username,
				name,
				password,
				email,
				phone,
				creditCard,
				nif,
				address
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
