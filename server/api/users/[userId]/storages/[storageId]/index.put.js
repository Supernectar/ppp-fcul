import Storage from '~~/server/models/Storage';
import Product from '~~/server/models/Product';

export default defineEventHandler(async (event) => {
  const { storageId } = event.context.params;
  const { item, price, unit, departureDate, arrivalDate } = await useBody(
    event
  );

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

    return { msg: 'this route is sus' };
  } catch (err) {
    console.log(err);
    return { error: 'Could not update storage' };
  }
});
