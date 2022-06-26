import Product from '~~/server/models/Product';
import Storage from '~~/server/models/Storage';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  try {
    const { userId, storageId } = event.context.params;

    const productIds = (await Storage.findById(storageId)).products;
    const products = await Product.find({
      _id: { $in: productIds }
    })
      .populate('productLine')
      .populate('storage')
      .populate({ path: 'productLine', populate: 'item' });

    event.res.jsonResponse.data = {
      items: products
    };
  } catch (err) {
    event.res.jsonResponse.error = err;
  }

  return event.res.jsonResponse;
});
