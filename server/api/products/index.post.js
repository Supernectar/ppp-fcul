import Product from '~~/server/models/Product';
import ProductLine from '~~/server/models/ProductLine';
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
  try {
    const productLine =
      (await ProductLine.findOne({ supplier, name })) ||
      (await ProductLine.create({
        name,
        item,
        price,
        currencyUnit,
        supplier
        // products: []
      }));

    const polutions = await Polution.find();
    const actualPolutions = [];
    for (
      let i = 0;
      i < 2 + Math.floor(Math.random() * (polutions.length - 2));
      i++
    ) {
      actualPolutions.push({
        quantity: Math.floor(Math.random() * 40),
        polution: polutions[i]
      });
    }

    const product = await Product.create({
      productLine,
      quantity,
      storage,
      stripeId,
      polutions: actualPolutions
    });

    await ProductLine.updateOne(
      { _id: productLine },
      {
        $push: {
          products: product
        }
      }
    );

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
