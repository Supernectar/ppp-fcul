import User from '~~/server/models/User';
import Order from '~~/server/models/Order';
import Product from '~~/server/models/Product';
import Status from '~~/server/models/Status';
import Transport from '~~/server/models/Transport';
import Item from '~~/server/models/Item';
import Storage from '~~/server/models/Storage';

export default defineEventHandler(async (event) => {
  const { userId } = event.context.params;

  try {
    const user = await User.findById(userId)
      .populate({
        path: 'supplierData',
        populate: {
          path: 'orders',
          model: Order,
          populate: [
            { path: 'product', model: Product },
            'consumer',
            { path: 'status', model: Status },
            { path: 'transport', model: Transport }
          ]
        }
      })
      .populate({
        path: 'supplierData.orders',
        populate: {
          path: 'product',
          model: Product,
          populate: [
            { path: 'item', model: Item },
            { path: 'storages', model: Storage }
          ]
        }
      });
    return user;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find user' };
  }
});
