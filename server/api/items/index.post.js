//import Item from '~~/server/utils/models/Item';
export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;

	const id = req.body.id;
	const name = req.body.name;
	const type = req.body.type;
	const subtype = req.body.subtype;
	const brand = req.body.brand;
	const description = req.body.description;
	const producer = req.body.producer;
	const exp_date = req.body.exp_date;
	const polution = req.body.polution;
	const resource = req.body.resource;
	Item.insertMany({
		id: id,
		name: name,
		type: type,
		subtype: subtype,
		brand: brand,
		description: description,
		producer: producer,
		exp_date: exp_date,
		polution: polution,
		resource: resource
	}).then((result) => res.send(result));

	return event.res.jsonResponse;
});
