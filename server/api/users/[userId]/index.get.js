import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  const { userId } = event.context.params;

  try {
    const user = await User.findById(userId)
      .populate({
        path: 'supplierData',
        populate: {
          path: 'orders',
          populate: ['product', 'consumer']
        }
      })
      .populate({
        path: 'supplierData.orders',
        populate: {
          path: 'product',
          populate: [
            {
              path: 'productLine',
              populate: 'item'
            },
            'storage'
          ]
        }
      });
    console.log(user);
    event.res.jsonResponse.data = {
      items: user
    };
  } catch (err) {
    console.log(err);
    event.res.jsonResponse.error = err;
  }

  return event.res.jsonResponse;
});
