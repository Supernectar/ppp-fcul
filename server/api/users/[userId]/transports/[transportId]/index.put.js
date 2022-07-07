export default defineEventHandler(async (event) => {
  const { userId } = event.context.params;
  const { marca, modelo, maxLoad, status, plate } = await useBody(event);
  try {
    const user = await User.updateOne(
      { _id: userId },
      {
        marca,
        modelo,
        maxLoad,
        status,
        plate
      }
    );

    return user;
  } catch (err) {
    console.log(err);
    return { error: 'Could not update user' };
  }
});
