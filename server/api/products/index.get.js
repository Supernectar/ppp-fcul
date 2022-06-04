import Item from '~~/server/models/Product';

export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;
	const params = useQuery(event);

	const items = await Item.find(params);
	event.res.jsonResponse.data = {
		items: items
	};
	return event.res.jsonResponse;
});
