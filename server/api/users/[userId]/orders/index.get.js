import User from '~~/server/models/User';
import Order from '~~/server/models/Order';

export default defineEventHandler(async (event) => {
  try {
    const { userId } = event.context.params;

    const user = await User.findOne({ _id: userId });
    const orderIds = user.consumerData.orders;
    const orders = [];
    for (let i = 0; i < orderIds.length; i++) {
      const order = await Order.findOne({
        _id: orderIds[i]
      });
      orders.push(order);
    }
    return orders;
  } catch (err) {
    console.log(err);
    return { error: 'Could not retrieve orders' };
  }
});
