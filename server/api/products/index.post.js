import Product from '~~/server/models/Product';
import Storage from '~~/server/models/Storage';

export default defineEventHandler(async (event) => {
  try {
    const { item, price, unit, supplier, quantity, storageId } = JSON.parse(
      await useBody(event)
    );

    try {
      const product = await Product.create({
        item,
        price,
        unit,
        supplier,
        quantity
      });

      const storage = await Storage.updateOne(
        { _id: storageId },
        {
          $push: {
            products: product
          }
        }
      );
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
