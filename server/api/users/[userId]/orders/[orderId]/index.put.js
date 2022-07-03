import Order from '~~/server/models/Order';

export default defineEventHandler(async (event) => {
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

    return order;
  } catch (err) {
    console.log(err);
    return { error: 'Could not update order' };
  }
});
