export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;
	const id = req.params.id;
	Item.findOne({ id: id }).then((result) => res.send(result.polution));

	return event.res.jsonResponse;
});
