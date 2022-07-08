import Product from '~~/server/models/Product';
import User from '~~/server/models/User';
import Item from '~~/server/models/Item';
import Storage from '~~/server/models/Storage';
import Polution from '~~/server/models/Polution';
import Resource from '~~/server/models/Resource';

export default defineEventHandler(async (event) => {
  const { productId } = event.context.params;

  try {
    const product = await Product.findById(productId)
      .populate({ path: 'item', model: Item })
      .populate({ path: 'supplier', model: User })
      .populate({ path: 'storages', model: Storage })
      .populate({ path: 'polutions.polution', model: Polution })
      .populate({ path: 'resources.resource', model: Resource });
    return product;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find product' };
  }
});
