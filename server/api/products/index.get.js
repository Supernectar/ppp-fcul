import Product from '~~/server/models/Product';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  const params = useQuery(event);

  try {
    const products = await Product.find(params)
      .populate('productLine')
      .populate('storage')
      .populate({ path: 'productLine', populate: 'item' });

    return products;
  } catch (err) {
    console.log(err);
    return { error: 'Could not retrieve products' };
  }
});
