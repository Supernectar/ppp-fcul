export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;
	const id = req.params.id;
	const max_load = req.body.max_load;
	const status = req.body.status;
	Transport.updateMany({ id }, { id, max_load, status }).then((result) =>
		res.send(result)
	);

	return event.res.jsonResponse;
});
