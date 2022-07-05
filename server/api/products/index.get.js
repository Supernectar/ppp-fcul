import Product from '~~/server/models/Product';

export default defineEventHandler(async (event) => {
  const params = useQuery(event);

  try {
    const products = await Product.find(params)
      .populate('item')
      .populate('supplier')
      .populate('storages')
      .populate('polutions.polution')
      .populate('resources.resource');
    return products;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find products' };
  }
});
