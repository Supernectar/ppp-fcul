import Order from '~~/server/models/Order';
import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
  const { userId, orderId } = event.context.params;

  try {
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

    return 'Good';
  } catch (err) {
    ole.log(err);
    return { error: 'Could not delete order' };
  }
});
