import User from '~~/server/models/User';
import Order from '~~/server/models/Order';
import Transport from '~~/server/models/Transport';
import Status from '~~/server/models/Status';
import Address from '~~/server/models/Address';
import Product from '~~/server/models/Product';
import Item from '~~/server/models/Item';

export default defineEventHandler(async (event) => {
  const { userId } = event.context.params;
  const { type } = useQuery(event);

  try {
    // let order = await Order.find({ consumer: userId });
    const user = await User.findById(userId);
    // .populate({
    //   path: 'supplierData.orders',
    //   populate: ['consumer', 'product']
    // });
    if (type === 'transport') {
      const orderIds = user.transporterData.orders;
      const orders = [];
      for (let i = 0; i < orderIds.length; i++) {
        const order = await Order.findById(orderIds[i]).populate([
          { path: 'transport', model: Transport },
          { path: 'status', model: Status },
          { path: 'from', model: Address },
          { path: 'to', model: Address }
        ]);

        orders.push(order);
      }
      return orders;
    }
    if (type === undefined) {
      const orderIds = user.consumerData.orders;
      const orders = [];
      for (let i = 0; i < orderIds.length; i++) {
        const order = await Order.findById(orderIds[i])

          .populate({ path: 'status', model: Status })
          .populate({
            path: 'products',
            model: Product,
            populate: {
              path: 'product',
              model: Product,
              populate: [
                { path: 'item', model: Item },
                { path: 'supplier', model: User }
              ]
            }
          });

        orders.push(order);
      }

      return orders;
    }
  } catch (err) {
    console.log(err);
    return { error: 'Could not find orders' };
  }
});
