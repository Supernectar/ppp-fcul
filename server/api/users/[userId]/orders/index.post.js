import Order from '~~/server/models/Order';
import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  try {
    const { numberItems, price, status, departureDate, arrivalDate, consumer } =
      await useBody(event);
    const { userId } = event.context.params;

    const order = await Order.create({
      numberItems,
      price,
      status,
      departureDate,
      arrivalDate,
      consumer
    });

    const orderUser = await User.updateOne(
      { _id: userId },
      {
        $push: {
          'consumerData.orders': order._id
        }
      }
    );
    event.res.jsonResponse.context = event.context.params;
    event.res.jsonResponse.data = {
      items: orderUser
    };
  } catch (err) {
    console.log(err);
    event.res.jsonResponse.error = err;
  }

  return event.res.jsonResponse;
});
