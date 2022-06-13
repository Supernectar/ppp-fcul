export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;
	const id = req.params.id;
	Transport.findOne({ id }).then((result) => res.send(result));

	return event.res.jsonResponse;
});
