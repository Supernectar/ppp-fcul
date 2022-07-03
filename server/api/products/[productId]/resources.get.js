import Product from '~~/server/models/Product';
import Resource from '~~/server/models/Resource';

export default defineEventHandler(async (event) => {
  const { productId } = event.context.params;

  try {
    const product = await Product.findById(productId);
    const resourcesIds = product.resources;
    const resources = [];
    for (let i = 0; i < resourcesIds.length; i++) {
      const resource = await Resource.findOne({
        _id: resourcesIds[i]
      });
      resources.push(resource);
    }

    return product;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find product' };
  }
});
