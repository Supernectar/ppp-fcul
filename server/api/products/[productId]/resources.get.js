import Product from '~~/server/models/Product';
import Resource from '~~/server/models/Resource';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  try {
    const { productId } = event.context.params;
    const product = await Product.findOne({ _id: productId });
    const resourcesIds = product.resources;
    const resources = [];
    for (let i = 0; i < resourcesIds.length; i++) {
      const resource = await Resource.findOne({
        _id: resourcesIds[i]
      });
      resources.push(resource);
    }
    event.res.jsonResponse.context = event.context.params;
    event.res.jsonResponse.data = {
      items: resources
    };
  } catch (err) {
    console.log(err);
    event.res.jsonResponse.error = err;
  }

  return event.res.jsonResponse;
});
