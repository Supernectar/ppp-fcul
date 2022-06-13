import Order from '~~/server/models/Order';
import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  try {
    const { userId, orderId } = event.context.params;
    const user = await User.findOne({ _id: userId });
    const orderIds = user.consumerData.orders;
    let order = [];
    for (let i = 0; i < orderIds.length; i++) {
      order = await Order.findOne({
        _id: orderId
      });
    }
    event.res.jsonResponse.context = event.context.params;
    event.res.jsonResponse.data = {
      items: order
    };
  } catch (err) {
    console.log(err);
    event.res.jsonResponse.error = err;
  }

  return event.res.jsonResponse;
});
