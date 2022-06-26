import Product from '~~/server/models/Product';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  const params = useQuery(event);

  const products = await Product.find(params)
    .populate('productLine')
    .populate('storage')
    .populate({ path: 'productLine', populate: 'item' });
  event.res.jsonResponse.data = {
    items: products
  };
  return event.res.jsonResponse;
});
