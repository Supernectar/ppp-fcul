import Order from '~~/server/models/Order';
import Status from '~~/server/models/Status';

export default defineEventHandler(async (event) => {
  const { orderId } = event.context.params;
  const { numberItems, price, statusId, status, departureDate, arrivalDate } =
    await useBody(event);

  try {
    const statusModel = await Status.updateOne(
      { _id: statusId },
      { name: status }
    );
    const order = await Order.updateOne(
      { _id: orderId },
      {
        numberItems,
        price,
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
