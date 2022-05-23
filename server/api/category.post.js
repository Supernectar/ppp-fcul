import Category from '~~/server/utils/models/Category';
export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;

	const { name } = await useBody(event);

	try {
		let result = Category.create({
			name
		});
	} catch (err) {
		event.res.jsonResponse.error = {
			message: err
		};
	}
	return event.res.jsonResponse;
});
