import Product from '~~/server/models/Product';
import Order from '~~/server/models/Order';
import Item from '~~/server/models/Item';
import User from '~~/server/models/User';
import Polution from '~~/server/models/Polution';

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
      .populate({ path: 'item', model: Item })
      .populate({ path: 'supplier', model: User })
      .populate({ path: 'polutions.polution', model: Polution });

    return products;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find products' };
  }
});
