import Order from '~~/server/models/Order';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;

  const { orderId } = event.context.params;
  const { numberItems, price, status, departureDate, arrivalDate } =
    await useBody(event);

  try {
    const order = await Order.updateOne(
      { _id: orderId },
      {
        numberItems,
        price,
        status,
        departureDate,
        arrivalDate
      }
    );
    event.res.jsonResponse.data = {
      items: [order]
    };
  } catch (err) {
    console.log(err);
    event.res.jsonResponse.error = {
      message: err
    };
  }
  return event.res.jsonResponse;
});
