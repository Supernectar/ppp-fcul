import Storage from '~~/server/models/Storage';
import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
  const { name, address } = await useBody(event);
  const { userId } = event.context.params;

  try {
    const storage = await Storage.create({
      name,
      address
    });

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
