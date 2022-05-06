import Item from '~~/server/utils/models/Item';
export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;
	const items = await Item.find();
	//return res;
	//return event.res.jsonResponse;
	event.res.jsonResponse.data = {
		items: items
	};
	return event.res.jsonResponse;
});
