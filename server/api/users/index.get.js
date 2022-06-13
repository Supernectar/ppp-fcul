import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;

  const params = useQuery(event);
  const users = await User.find(params);

  event.res.jsonResponse.data = {
    items: users
  };
  return event.res.jsonResponse;
});
