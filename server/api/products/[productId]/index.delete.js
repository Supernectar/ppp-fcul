import Product from '~~/server/models/Product';
import Storage from '~~/server/models/Storage';

export default defineEventHandler(async (event) => {
  const { productId } = event.context.params;

  try {
    const product = await Product.findById(productId);

    await Storage.findByIdAndUpdate(product.storage, {
      $pull: {
        products: productId
      }
    });

    await Product.findByIdAndDelete(productId);

    return 'Good';
  } catch (err) {
    console.log(err);
    return { error: 'Could not delete product' };
  }
});
