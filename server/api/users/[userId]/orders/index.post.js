export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;
	const status = req.body.status;
	const departureDate = req.body.departureDate;
	const arrivalDate = req.body.arrivalDate;

	Order.insertMany({
		status: status,
		departureDate: departureDate,
		arrivalDate: arrivalDate
	}).then((result) => res.send(result));

	return event.res.jsonResponse;
});
