import User from '~~/server/models/User';
import Order from '~~/server/models/Order';

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
          'transport',
          'status',
          'from',
          'to'
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

          .populate('status')
          .populate({
            path: 'products',
            populate: {
              path: 'product',
              populate: ['item', 'supplier']
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
