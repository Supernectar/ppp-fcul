import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
  const params = useQuery(event);

  const users = await User.find(params);

  return users;
});
