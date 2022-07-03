import Order from '~~/server/models/Order';
import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
  const { userId, orderId } = event.context.params;
  try {
    const user = await User.findById(userId);
    const orderIds = user.consumerData.orders;
    let order = [];
    for (let i = 0; i < orderIds.length; i++) {
      order = await Order.findOne({
        _id: orderId
      });
    }
    return order;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find order' };
  }
});
