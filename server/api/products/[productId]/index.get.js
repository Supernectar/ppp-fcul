import Product from '~~/server/models/Product';
export default defineEventHandler(async (event) => {
  const { productId } = event.context.params;

  try {
    const product = await Product.findById(productId)
      .populate('item')
      .populate('supplier')
      .populate('storages');
    return product;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find product' };
  }
});
