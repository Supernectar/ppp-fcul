import User from '~~/server/models/User';
import Order from '~~/server/models/Order';

export default defineEventHandler(async (event) => {
  const { userId } = event.context.params;

  try {
    const user = await User.findById(userId);
    const orderIds = user.supplierData.orders;
    const orders = [];
    for (let i = 0; i < orderIds.length; i++) {
      const order = await Order.findOne({
        _id: orderIds[i]
      });
      orders.push(order);
    }

    return ordes;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find orders' };
  }
});
