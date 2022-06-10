import User from "~~/server/models/Cart";

export default defineEventHandler(async (event) => {
  try {
    const { product, quantity } = await useBody(event);

    try {
      let cart = await Cart.create({
        product,
        quantity,
      });
    } catch (err) {
      event.res.jsonResponse.error = {
        message: err._message,
        errors: err.errors,
      };
      console.log(err);
    }
  } catch (err) {
    event.res.jsonResponse.error = {
      message: err,
    };
  }

  return event.res.jsonResponse;
});
