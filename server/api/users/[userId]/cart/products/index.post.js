import User from '~~/server/models/Cart';

export default defineEventHandler(async (event) => {
  const { product, quantity } = await useBody(event);
  try {
    const cart = await Cart.create({
      product,
      quantity
    });
  } catch (err) {
    console.log(err);
    return { error: 'Could not create cart' };
  }
});
