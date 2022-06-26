import Product from '~~/server/models/Product';
import Polution from '~~/server/models/Polution';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  try {
    const { productId } = event.context.params;
    const product = await Product.findById(productId);
    const polutionIds = [];
    for (const polution of product.polutions) {
      polutionIds.push(polution.polution);
    }

    const polutions = [];
    for (let i = 0; i < polutionIds.length; i++) {
      const polution = await Polution.findOne({
        _id: polutionIds[i]
      });
      polutions.push(polution);
    }
    event.res.jsonResponse.context = event.context.params;
    event.res.jsonResponse.data = {
      items: polutions
    };
  } catch (err) {
    console.log(err);
    event.res.jsonResponse.error = err;
  }

  return event.res.jsonResponse;
});
