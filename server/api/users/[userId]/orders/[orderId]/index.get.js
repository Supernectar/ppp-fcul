import Order from '~~/server/models/Order';
import User from '~~/server/models/User';
import Polution from '~~/server/models/Polution';
import Resource from '~~/server/models/Resource';
import Status from '~~/server/models/Status';
import Product from '~~/server/models/Product';
import Item from '~~/server/models/Item';

export default defineEventHandler(async (event) => {
  const { userId, orderId } = event.context.params;
  try {
    const order = await Order.findById(orderId)
      .populate({ path: 'status', model: Status })
      .populate({
        path: 'products.product',
        model: Product,
        populate: [
          { path: 'item', model: Item },
          { path: 'supplier', model: User },
          {
            path: 'polutions',
            populate: { path: 'polution', model: Polution }
          },
          {
            path: 'resources',
            populate: { path: 'resource', model: Resource }
          }
        ]
      });

    return order;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find order' };
  }
});
