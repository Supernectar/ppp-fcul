import Product from '~~/server/models/Product';
import Order from '~~/server/models/Order';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  try {
    const { userId, orderId } = event.context.params;

    const productIds = (await Order.findById(orderId)).products;
    const products = await Product.find({
      _id: { $in: productIds }
    })
      .populate('productLine')
      .populate('polutions.polution')
      .populate({ path: 'productLine', populate: ['item', 'supplier'] });
    event.res.jsonResponse.data = {
      items: products
    };
  } catch (err) {
    event.res.jsonResponse.error = err;
  }

  return event.res.jsonResponse;
});
