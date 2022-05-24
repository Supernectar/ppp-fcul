import Category from '~~/server/utils/models/Category';

export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;

	const params = useQuery(event);
	const categories = await Category.find(params);
	//   .populate("categories");
	//const categories2 = categories1.categories.populate("categories");

	event.res.jsonResponse.data = {
		items: categories
	};
	return event.res.jsonResponse;
});
