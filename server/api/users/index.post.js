import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
  const { name, password, email, phone, creditCard, nif, address } =
    await useBody(event);

  if ((await $fetch(`/api/users?email=${email}`)).length > 0) {
    return { error: 'User already exists' };
  }

  try {
    await User.create({
      username: email.split('@')[0] + ((await User.count()) + 200),
      name,
      password,
      email,
      phone,
      creditCard,
      nif,
      address
    });

    const user = await User.findOne({ email });
    return user;
  } catch (err) {
    console.log('---', event.req.url, '---');
    console.log(err);
    return { error: 'Could not create user' };
  }
});
