import Product from '~~/server/models/Product';
import Item from '~~/server/models/Item';
import User from '~~/server/models/User';
import Storage from '~~/server/models/Storage';
import Polution from '~~/server/models/Polution';
import Resource from '~~/server/models/Resource';

export default defineEventHandler(async (event) => {
  const params = useQuery(event);

  try {
    const products = await Product.find(params)
      .populate({ path: 'item', model: Item })
      .populate({ path: 'supplier', model: User })
      .populate({ path: 'storages', model: Storage })
      .populate({ path: 'polutions.polution', model: Polution })
      .populate({ path: 'resources.resource', model: Resource });
    return products;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find products' };
  }
});
