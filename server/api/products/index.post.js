import Product from '~~/server/models/Product';
import Storage from '~~/server/models/Storage';
import Polution from '~~/server/models/Polution';
import Item from '~~/server/models/Item';

export default defineEventHandler(async (event) => {
  const {
    name,
    itemId,
    price,
    stripeId,
    currencyUnit,
    supplier,
    quantity,
    storages
  } = await useBody(event);

  try {
    const item = await Item.findById(itemId);

    if (item.minPrice > price)
      await Item.findByIdAndUpdate(itemId, { minPrice: price });
    if (item.maxPrice < price)
      await Item.findByIdAndUpdate(itemId, { maxPrice: price });
  } catch (err) {
    return err;
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ---- Generate random polutions ---- //
  const polutions = await $fetch('/api/polutions');
  const shuffledPolutions = shuffle(polutions);

  const numPolutions =
    Math.floor(Math.random() * (polutions.length - 2 + 1)) + 2;
  const tempPolutions = shuffledPolutions.slice(0, numPolutions);
  const actualPolutions = [];
  for (const polution of tempPolutions) {
    actualPolutions.push({
      quantity: Math.floor(Math.random() * 400),
      polution
    });
  }

  // ---- Generate random resources ---- //
  const resources = await $fetch('/api/resources');
  const shuffledResources = shuffle(resources);

  const numResources =
    Math.floor(Math.random() * (resources.length - 2 + 1)) + 2;
  const tempResources = shuffledResources.slice(0, numResources);
  const actualResources = [];
  for (const resource of tempResources) {
    actualResources.push({
      quantity: Math.floor(Math.random() * 400),
      resource
    });
  }

  try {
    const product = await Product.create({
      name,
      item: itemId,
      price,
      currencyUnit,
      supplier,
      quantity,
      storages,
      polutions: actualPolutions,
      resources: actualResources,
      stripeId
    });

    for (const storageId of storages) {
      await Storage.findByIdAndUpdate(storageId, {
        $push: {
          products: product
        }
      });
    }

    return product;
  } catch (err) {
    console.log(err);
    return { error: 'Could not create product' };
  }
});
