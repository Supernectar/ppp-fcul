import Product from '~~/server/models/Product';
export default defineEventHandler(async (event) => {
  const { productId } = event.context.params;

  try {
    const product = await Product.findById(productId)
      .populate('productLine')
      .populate('storage')
      .populate({ path: 'productLine', populate: ['item', 'supplier'] })
      .populate('polutions')
      .populate('resources');
    return product;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find product' };
  }
});
