import Item from '~~/server/models/Item';

export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;
	try {
		const { itemId } = event.context.params;
		let item = await Item.find({ _id: itemId });
		event.res.jsonResponse.context = event.context.params;
		event.res.jsonResponse.data = {
			items: item
		};
	} catch (err) {
		console.log(err);
		event.res.jsonResponse.error = err;
	}

	return event.res.jsonResponse;
});
