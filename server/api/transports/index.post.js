export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;
	const id = req.body.id;
	const max_load = req.body.max_load;
	const status = req.body.status;
	const plate = req.body.plate;
	Transport.insertMany({
		id: id,
		max_load: max_load,
		status: status,
		plate: plate
	}).then((result) => res.send(result));

	return event.res.jsonResponse;
});
