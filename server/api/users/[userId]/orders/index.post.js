import Order from '~~/server/models/Order';
import User from '~~/server/models/User';
import Transport from '~~/server/models/Transport';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  try {
    // console.log(111111);
    const { status, products, transport } = await useBody(event);
    const { userId } = event.context.params;

    const orderC = await Order.create({
      status,
      products,
      transport
    });
    // console.log(2222);
    // console.log(orderC);

    const orderT = await Order.create({
      status,
      products,
      consumer: userId
    });
    // console.log(333333);
    // console.log(orderT);
    const orderUser = await User.updateOne(
      { _id: userId },
      {
        $push: {
          'consumerData.orders': orderC._id
        }
      }
    );
    // console.log(orderUser);
    // console.log(4444);
    // console.log(transport);
    // console.log(transport.owner);
    // console.log(orderT);
    const transporter = await Transport.findOne({ _id: transport });
    // console.log(transporter);
    // console.log('---');
    // console.log(transporter.owner);
    const orderTransport = await User.findByIdAndUpdate(transporter.owner, {
      $push: {
        'transporterData.orders': orderT._id
      }
    });
    // console.log(orderTransport);
    console.log(new Date());
    for (const prod of products) {
      // const sup = prod.productLine.supplier
      const orderSup = await User.findByIdAndUpdate(prod.productLine.supplier, {
        $push: {
          'supplierData.orders': {
            date: new Date(),
            consumer: userId,
            product: prod._id
          }
        }
      });
      // if()
    }
    event.res.jsonResponse.context = event.context.params;
    event.res.jsonResponse.data = {
      items: orderUser
    };
  } catch (err) {
    console.log(err);
    event.res.jsonResponse.error = err;
  }

  return event.res.jsonResponse;
});
