import Order from '~~/server/models/Order';
import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
  const { userId, orderId } = event.context.params;
  try {
    const order = await Order.findById(orderId)
      .populate('status')
      .populate({
        path: 'products.product',
        populate: [
          'item',
          'supplier',
          { path: 'polutions', populate: ['polution'] },
          { path: 'resources', populate: ['resource'] }
        ]
      });

    return order;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find order' };
  }
});
