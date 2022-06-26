import Product from '~~/server/models/Product';
import ProductLine from '~~/server/models/ProductLine';
import Storage from '~~/server/models/Storage';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  const { productId } = event.context.params;

  const product = await Product.findById(productId);

  await ProductLine.findByIdAndUpdate(product.productLine, {
    $pull: {
      products: productId
    }
  });

  await Storage.findByIdAndUpdate(product.storage, {
    $pull: {
      products: productId
    }
  });

  await Product.findByIdAndDelete(productId);

  return event.res.jsonResponse;
});
