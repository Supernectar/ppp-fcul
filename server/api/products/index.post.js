import Product from '~~/server/models/Product';

export default defineEventHandler(async (event) => {
  try {
    const { item, price, unit, supplier, quantity } = await useBody(event);

    try {
      const product = await Product.create({
        item,
        price,
        unit,
        supplier,
        quantity
      });
    } catch (err) {
      event.res.jsonResponse.error = {
        message: err._message,
        errors: err.errors
      };
      console.log(err);
    }
  } catch (err) {
    event.res.jsonResponse.error = {
      message: err
    };
  }

  return event.res.jsonResponse;
});
