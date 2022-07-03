import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
  const params = useQuery(event);

  try {
    const users = await User.find(params);

    return users;
  } catch {
    console.log(err);
    return { error: 'Could not find users' };
  }
});
