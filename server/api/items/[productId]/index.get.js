//import Item from '~~/server/utils/models/Item';
export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;
	Item.find().then((result) => res.send(result));

	return event.res.jsonResponse;
});
