import Product from '~~/server/models/Product';

export default defineEventHandler(async (event) => {
  const params = useQuery(event);

  try {
    const products = await Product.find(params)
      .populate('productLine')
      .populate('storage')
      .populate({ path: 'productLine', populate: ['item', 'supplier'] })
      .populate('polutions')
      .populate('resources')
      .populate('polutions.polution');
    return products;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find products' };
  }
});
