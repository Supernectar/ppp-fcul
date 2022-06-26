import Product from '~~/server/models/Product';
import ProductLine from '~~/server/models/ProductLine';
import Storage from '~~/server/models/Storage';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  try {
    const { userId, storageId } = event.context.params;

    const productLines = await ProductLine.find({ supplier: userId });
    // const productIds = (await Storage.findById(storageId)).products;
    // console.log(productIds);
    // const products = await Product.find({
    //   _id: { $in: productIds }
    // })
    //   .populate('productLine')
    //   .populate('storage')
    //   .populate({ path: 'productLine', populate: 'item' });

    event.res.jsonResponse.data = {
      items: productLines
    };
  } catch (err) {
    event.res.jsonResponse.error = err;
  }

  return event.res.jsonResponse;
});
