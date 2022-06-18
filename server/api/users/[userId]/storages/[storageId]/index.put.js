import Storage from '~~/server/models/Storage';
import Product from '~~/server/models/Product';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;

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
