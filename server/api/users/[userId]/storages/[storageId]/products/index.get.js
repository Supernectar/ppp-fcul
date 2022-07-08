import Product from '~~/server/models/Product';
import Storage from '~~/server/models/Storage';
import Item from '~~/server/models/Item';

export default defineEventHandler(async (event) => {
  const { userId, storageId } = event.context.params;

  try {
    const productIds = (await Storage.findById(storageId)).products;
    const products = await Product.find({
      _id: { $in: productIds }
    })
      .populate({ path: 'item', model: Item })
      .populate({ path: 'storages', model: Storage });

    return products;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find products' };
  }
});
