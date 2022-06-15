export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;

  const { email, password } = useBody(event);

  try {
    const user = await User.create({
      email,
      password
    });

    res.json(user);
  } catch (err) {
    res.json(err);
  }
  return event.res.jsonResponse;
});
