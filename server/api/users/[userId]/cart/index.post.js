import Cart from '~~/server/models/Cart';

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
			const user = await Cart.create({
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
