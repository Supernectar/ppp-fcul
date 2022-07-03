import Order from '~~/server/models/Order';
import User from '~~/server/models/User';
import Transport from '~~/server/models/Transport';

export default defineEventHandler(async (event) => {
  const { status, products, transport } = await useBody(event);
  // const baba = await useBody(event);
  // console.log(baba);

  // console.log('---END---');
  // return 'OKOK';
  // const { status, products, transport } = JSON.parse(await useBody(event));
  // const { status, products, transport  } = JSON.stringify(await useBody(event));
  const { userId } = event.context.params;

  const products2 = [];
  for (const product of products) {
    products2.push({
      quantity: product.cartQuantity,
      product
    });
  }

  try {
    const orderC = await Order.create({
      status,
      products: products2,
      transporter: transport
    });

    const orderT = await Order.create({
      status,
      products: products2,
      consumer: userId
    });
    const orderUser = await User.updateOne(
      { _id: userId },
      {
        $push: {
          'consumerData.orders': orderC._id
        }
      }
    );
    const transporter = await Transport.findById(transport);
    const orderTransport = await User.findByIdAndUpdate(transporter.owner, {
      $push: {
        'transporterData.orders': orderT._id
      }
    });
    for (const prod of products2) {
      console.log(products);
      // console.log(prod.product);
      const orderSup = await User.findByIdAndUpdate(
        prod.product.productLine.supplier,
        {
          $push: {
            'supplierData.orders': {
              date: new Date(),
              consumer: userId,
              product: prod.product,
              quantity: prod.quantity,
              status: 'created'
            }
          }
        }
      );
    }
    return orderUser;
  } catch (err) {
    console.log(err);
    return { error: 'Could not create order' };
  }
});
