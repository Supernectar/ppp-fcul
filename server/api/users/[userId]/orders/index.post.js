import Order from '~~/server/models/Order';
import User from '~~/server/models/User';
import Transport from '~~/server/models/Transport';
import Status from '~~/server/models/Status';

export default defineEventHandler(async (event) => {
  const { status, products, transport, from, to } = await useBody(event);
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
    const statusModel = await Status.create({
      name: status
    });

    const orderC = await Order.create({
      status: statusModel,
      products: products2,
      transport,
      from,
      to
    });

    const orderT = await Order.create({
      consumer: userId,
      status: statusModel,
      transport,
      from,
      to,
      supplier: products2[0].product.supplier
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
    let orderSup = {};
    for (const prod of products2) {
      orderSup = await User.findByIdAndUpdate(prod.product.supplier, {
        $push: {
          'supplierData.orders': {
            date: new Date(),
            consumer: userId,
            transport,
            product: prod.product,
            quantity: prod.quantity,
            status: statusModel
          }
        }
      });
    }

    return [statusModel._id, orderC, orderT];
  } catch (err) {
    console.log(err);
    return { error: 'Could not create order' };
  }
});
