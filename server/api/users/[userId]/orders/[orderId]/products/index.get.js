import Product from '~~/server/models/Product';
import Order from '~~/server/models/Order';

export default defineEventHandler(async (event) => {
  const { userId, orderId } = event.context.params;
  try {
    const productIds = (await Order.findById(orderId)).products;

    console.log(orderId);
    console.log(await Order.findById(orderId));
    console.log(productIds);

    const products = await Product.find({
      _id: { $in: productIds }
    })
      .populate('productLine')
      .populate('polutions.polution')
      .populate({ path: 'productLine', populate: ['item', 'supplier'] });

    return products;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find products' };
  }
});
