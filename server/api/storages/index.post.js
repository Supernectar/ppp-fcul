import Storage from '~~/server/models/Storage';
import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
  const { name, owner, address, isPublic } = await useBody(event);

  try {
    const storage = await Storage.create({
      name,
      address,
      isPublic,
      popularity: 0,
      owner
    });

    await User.findByIdAndUpdate(owner, {
      $push: {
        'supplierData.storages': storage
      }
    });

    return storage;
  } catch (err) {
    return err;
  }
});
