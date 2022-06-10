import Order from '~~/server/models/Order';

export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;
	try {
		const { orderId } = event.context.params;
		let order = await Order.deleteMany({
			_id: orderId
		});
		event.res.jsonResponse.context = event.context.params;
		event.res.jsonResponse.data = {
			items: order
		};
	} catch (err) {
		console.log(err);
		event.res.jsonResponse.error = err;
	}

	return event.res.jsonResponse;
});
