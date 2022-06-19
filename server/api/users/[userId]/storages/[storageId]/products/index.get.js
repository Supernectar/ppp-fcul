import Product from '~~/server/models/Product';
import Storage from '~~/server/models/Storage';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  try {
    const { userId, storageId } = event.context.params;

    const storage = await Storage.findById(storageId).populate('products');

    event.res.jsonResponse.data = {
      items: storage.products
    };
  } catch (err) {
    event.res.jsonResponse.error = err;
  }

  return event.res.jsonResponse;
});
