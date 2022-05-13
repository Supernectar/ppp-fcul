//import Item from '~~/server/utils/models/Item';
import Product from '~~/server/utils/models/Product';
export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;
	Product.find().then((result) => res.send(result));

	return event.res.jsonResponse;
});
