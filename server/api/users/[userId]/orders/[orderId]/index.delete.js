import Order from '~~/server/models/Order';
import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  try {
    const { userId, orderId } = event.context.params;
    const orderUser = await User.updateOne(
      { _id: userId },
      {
        $pull: {
          'consumerData.orders': orderId
        }
      }
    );
    await Order.deleteMany({
      _id: orderId
    });
    event.res.jsonResponse.context = event.context.params;
    event.res.jsonResponse.data = {
      items: orderUser
    };
  } catch (err) {
    console.log(err);
    event.res.jsonResponse.error = err;
  }

  return event.res.jsonResponse;
});
