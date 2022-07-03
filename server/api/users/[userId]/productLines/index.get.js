import Product from '~~/server/models/Product';
import ProductLine from '~~/server/models/ProductLine';
import Storage from '~~/server/models/Storage';

export default defineEventHandler(async (event) => {
  const { userId, storageId } = event.context.params;
  try {
    const productLines = await ProductLine.find({ supplier: userId });

    return productLines;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find product lines' };
  }
});
