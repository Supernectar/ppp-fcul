import Item from '~~/server/utils/models/Item';
export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;

	const {
		id,
		name,
		type,
		subtype,
		brand,
		description,
		producer,
		exp_date,
		polution,
		resource,
		category
	} = await useBody(event);

	try {
		let result = Item.create({
			id: id,
			name: name,
			//type: type,
			//subtype: subtype,
			brand: brand,
			description: description,
			producer: producer,
			exp_date: exp_date,
			polution: polution,
			resource: resource,
			category: category
		});
	} catch (err) {
		event.res.jsonResponse.error = {
			message: err
		};
	}
	return event.res.jsonResponse;
});
