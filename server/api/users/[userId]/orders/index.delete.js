import Order from '~~/server/models/Order';

export default defineEventHandler(async (event) => {
  const id = req.params.username;
  try {
    Order.deleteMany({ username: id }).then((result) => res.send(result));
    return 'Good';
  } catch (err) {
    console.log(err);
    return { error: 'Could not delete order' };
  }
});
