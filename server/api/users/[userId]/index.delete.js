import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
  const { userId } = event.context.params;

  try {
    const user = await User.deleteMany({ _id: userId });

    return 'Good';
  } catch (err) {
    console.log(err);
    return { error: 'Could not delete user' };
  }
});
