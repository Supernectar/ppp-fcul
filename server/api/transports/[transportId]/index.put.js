export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;
	const id = req.params.id;
	const max_load = req.body.max_load;
	const status = req.body.status;
	Transport.updateMany(
		{ id: id },
		{ id: id, max_load: max_load, status: status }
	).then((result) => res.send(result));

	return event.res.jsonResponse;
});
