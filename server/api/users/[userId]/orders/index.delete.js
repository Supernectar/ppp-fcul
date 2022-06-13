import Order from '~~/server/models/Order';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  const id = req.params.username;
  Order.deleteMany({ username: id }).then((result) => res.send(result));

  return event.res.jsonResponse;
});
