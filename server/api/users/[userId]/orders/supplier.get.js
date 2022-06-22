import User from '~~/server/models/User';
import Order from '~~/server/models/Order';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  try {
    const { userId } = event.context.params;
    const user = await User.findOne({ _id: userId });
    const orderIds = user.supplierData.orders;
    const orders = [];
    for (let i = 0; i < orderIds.length; i++) {
      const order = await Order.findOne({
        _id: orderIds[i]
      });
      orders.push(order);
    }
    event.res.jsonResponse.context = event.context.params;
    event.res.jsonResponse.data = {
      items: orders
    };
  } catch (err) {
    console.log(err);
    event.res.jsonResponse.error = err;
  }

  return event.res.jsonResponse;
});
