import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
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

    return user;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find user' };
  }
});
