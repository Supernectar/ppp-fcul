import Product from '~~/server/models/Product';
import Storage from '~~/server/models/Storage';

export default defineEventHandler(async (event) => {
  const { userId, storageId } = event.context.params;

  try {
    const productIds = (await Storage.findById(storageId)).products;
    const products = await Product.find({
      _id: { $in: productIds }
    })
      .populate('productLine')
      .populate('storage')
      .populate({ path: 'productLine', populate: 'item' });

    return products;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find products' };
  }
});
