import Storage from '~~/server/models/Storage';
import Address from '~~/server/models/Address';
import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
  const { name, address, isPublic } = await useBody(event);
  const { userId } = event.context.params;

  try {
    let storage;
    if (typeof address === 'object') {
      const newAddress = await Address.create({
        street: address.street,
        zipCode: address.zipCode,
        city: address.city,
        country: address.country
      });

      storage = await Storage.create({
        name,
        address: newAddress._id,
        isPublic,
        owner: userId,
        popularity: 0
      });
    } else {
      storage = await Storage.create({
        name,
        address,
        isPublic,
        owner: userId,
        popularity: 0
      });
    }

    // let b = await User.updateOne({ _id: userId });

    const user = await User.updateOne(
      { _id: userId },
      {
        $push: {
          'supplierData.storages': storage._id
        }
      }
    );
    return storage;
  } catch (err) {
    console.log(err);
    return { error: 'Could not create storage' };
  }
});
