export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;
	const id = req.params.username;
	Order.find({ username: id }).then((result) => res.send(result));

	return event.res.jsonResponse;
});
