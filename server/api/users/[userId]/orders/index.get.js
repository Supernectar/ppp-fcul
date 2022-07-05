import User from '~~/server/models/User';
import Order from '~~/server/models/Order';

export default defineEventHandler(async (event) => {
  const { userId } = event.context.params;

  try {
    // let order = await Order.find({ consumer: userId });
    const user = await User.findById(userId);
    // .populate({
    //   path: 'supplierData.orders',
    //   populate: ['consumer', 'product']
    // });

    const orderIds = user.consumerData.orders;
    const orders = [];
    for (let i = 0; i < orderIds.length; i++) {
      const order = await Order.findById(orderIds[i])
        .populate({
          path: 'products',
          populate: {
            path: 'product',
            populate: 'item'
          }
        })
        .populate('status');

      orders.push(order);
    }

    return orders;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find orders' };
  }
});
