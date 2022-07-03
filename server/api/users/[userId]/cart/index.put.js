import Cart from '~~/server/models/Cart';

export default defineEventHandler(async (event) => {
  const { username, name, password, email, phone, creditCard, nif, address } =
    await useBody(event);

  try {
    const cart = await Cart.create({
      username,
      name,
      password,
      email,
      phone,
      creditCard,
      nif,
      address
    });

    return cart;
  } catch (err) {
    console.log(err);
    return { error: 'Could not create cart' };
  }
});
