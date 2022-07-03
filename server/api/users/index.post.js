import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
  const { username, name, password, email, phone, creditCard, nif, address } =
    await useBody(event);

  try {
    const user = await User.create({
      username,
      name,
      password,
      email,
      phone,
      creditCard,
      nif,
      address
    });

    return user;
  } catch (err) {
    console.log(err);
    return { error: 'Could not create user' };
  }
});
