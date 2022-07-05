import Product from '~~/server/models/Product';
import Storage from '~~/server/models/Storage';

export default defineEventHandler(async (event) => {
  const { userId, storageId } = event.context.params;

  try {
    console.log(userId);
    const productIds = (await Storage.findById(storageId)).products;
    console.log(productIds);
    const products = await Product.find({
      _id: { $in: productIds }
    })
      .populate('item')
      .populate('storages');

    return products;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find products' };
  }
});
