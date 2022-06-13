import Category from '~~/server/models/Category';

export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;
	const { categoryId } = event.context.params;

	try {
		const category = await Category.find({ _id: categoryId });
		event.res.jsonResponse.context = event.context.params;
		event.res.jsonResponse.data = {
			items: category
		};
	} catch (err) {
		console.log(err);

		event.res.jsonResponse.error = err;
	}

	return event.res.jsonResponse;
});
