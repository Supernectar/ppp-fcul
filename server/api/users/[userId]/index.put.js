import User from '~~/server/models/User';
import Address from '~~/server/models/Address';

export default defineEventHandler(async (event) => {
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
    preferences,
    notification
  } = await useBody(event);

  try {
    let res = [];
    const user = await User.find({ _id: userId });
    const first = user[0].consumerData.address == undefined;
    const addresses = user[0].addresses;

    if (newAddress) {
      const newAddressO = await Address.create({
        street: newAddress.street,
        country: newAddress.country,
        city: newAddress.city,
        zipCode: newAddress.zipCode
      });

      addresses.push(newAddress._id);
      res = await User.updateOne(
        { _id: userId },
        {
          addresses
        }
      );
    }

    if (first) {
      const addressO = await Address.create({
        street: address.street,
        country: address.country,
        city: address.city,
        zipCode: address.zipCode
      });

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
          'consumerData.address': addressO._id,
          'supplierData.address': addressO._id,
          'transporterData.address': addressO._id
        }
      );
    }

    if (!first) {
      if (type === 'Consumer') {
        const addressO = await Address.create({
          street: address.street,
          country: address.country,
          city: address.city,
          zipCode: address.zipCode
        });

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
            notification,
            'consumerData.address': addressO._id
          }
        );
      } else if (type === 'Supplier') {
        const addressO = await Address.create({
          street: address.street,
          country: address.country,
          city: address.city,
          zipCode: address.zipCode
        });

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
            'supplierData.address': addressO._id
          }
        );
      } else if (type === 'Transporter') {
        const addressO = await Address.create({
          street: address.street,
          country: address.country,
          city: address.city,
          zipCode: address.zipCode
        });

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
            'transporterData.address': addressO._id
          }
        );
      } else if (type === undefined) {
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
            notification
          }
        );
      }
    }
    const userRes = await User.findById(userId);
    return userRes;
  } catch (err) {
    console.log(err);
    return { error: 'Could not update user' };
  }
});
