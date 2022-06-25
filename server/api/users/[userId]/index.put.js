import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;

  const { userId } = event.context.params;
  const {
    name,
    type,
    username,
    address,
    newAddress,
    phone,
    creditCard,
    nif,
    password,
    preferences
  } = await useBody(event);

  // if (userId !== event.req.userId) {
  // 	event.res.jsonResponse.error = {
  // 		message: 'You must be the owner to change this profile'
  // 	};
  // } else {
  try {
    let res = [];
    const user = await User.find({ _id: userId });
    const first = user[0].consumerData.address.length === 0;
    const addresses = user[0].addresses;
    addresses.push(newAddress);

    if (newAddress) {
      res = await User.updateOne(
        { _id: userId },
        {
          addresses
        }
      );
    }

    if (first) {
      res = await User.updateOne(
        { _id: userId },
        {
          name,
          username,
          address,
          phone,
          creditCard,
          nif,
          password,
          preferences,
          'consumerData.address': address,
          'supplierData.address': address,
          'transporterData.address': address
        }
      );
    }

    if (!first) {
      if (type === 'Consumer') {
        res = await User.updateOne(
          { _id: userId },
          {
            name,
            username,
            address,
            phone,
            creditCard,
            nif,
            password,
            preferences,
            'consumerData.address': address
          }
        );
      } else if (type === 'Supplier') {
        res = await User.updateOne(
          { _id: userId },
          {
            name,
            username,
            address,
            phone,
            creditCard,
            nif,
            password,
            preferences,
            'supplierData.address': address
          }
        );
      } else if (type === 'Transporter') {
        res = await User.updateOne(
          { _id: userId },
          {
            name,
            username,
            address,
            phone,
            creditCard,
            nif,
            password,
            preferences,
            'transporterData.address': address
          }
        );
      }
    }

    event.res.jsonResponse.data = {
      items: [res]
    };
  } catch (err) {
    console.log(err);
    event.res.jsonResponse.error = {
      message: err
    };
  }
  // }
  return event.res.jsonResponse;
});
