export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;
	const id = req.params.id;
	Item.findOne({ id: id }).then((result) => res.send(result.resource));

	return event.res.jsonResponse;
});
