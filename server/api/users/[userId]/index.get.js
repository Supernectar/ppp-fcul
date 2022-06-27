import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
  const { userId } = event.context.params;

  try {
    const user = await User.find({ _id: userId });

    return user;
  } catch (err) {
    console.log(err);
    return { error: 'Could not retrieve user' };
  }
});
