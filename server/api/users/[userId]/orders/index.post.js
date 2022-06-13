import Order from '~~/server/models/Order';

export default defineEventHandler(async (event) => {
	try {
		const {
			numberItems,
			price,
			status,
			departureDate,
			arrivalDate,
			consumer
		} = await useBody(event);

		try {
			const order = await Order.create({
				numberItems,
				price,
				status,
				departureDate,
				arrivalDate,
				consumer
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
