import Product from '~~/server/models/Product';
export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;

	const products = await Product.find();
	event.res.jsonResponse.data = {
		items: products
	};
	return event.res.jsonResponse;
});
