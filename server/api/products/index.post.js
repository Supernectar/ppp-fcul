import Product from '~~/server/models/Product';
import Storage from '~~/server/models/Storage';
import Polution from '~~/server/models/Polution';

export default defineEventHandler(async (event) => {
  const {
    name,
    item,
    price,
    stripeId,
    currencyUnit,
    supplier,
    quantity,
    storage
  } = await useBody(event);

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const polutions = await $fetch('/api/polutions');
  const shuffledArr = shuffle(polutions);

  const numPolutions = 2 + Math.floor(Math.random() * polutions.length - 2);
  const tempPolutions = shuffledArr.slice(0, numPolutions);
  const actualPolutions = [];
  for (const polution of tempPolutions) {
    actualPolutions.push({
      quantity: Math.floor(Math.random() * 400),
      polution
    });
  }

  try {
    const product = await Product.create({
      name,
      item,
      price,
      currencyUnit,
      supplier,
      quantity,
      storage,
      stripeId,
      polutions: actualPolutions
    });

    await Storage.updateOne(
      { _id: storage },
      {
        $push: {
          products: product
        }
      }
    );

    return product;
  } catch (err) {
    console.log(err);
    return { error: 'Could not create product' };
  }
});
