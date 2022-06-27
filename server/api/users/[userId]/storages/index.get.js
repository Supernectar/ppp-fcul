import User from '~~/server/models/User';
import Storage from '~~/server/models/Storage';

export default defineEventHandler(async (event) => {
  const { userId } = event.context.params;
  const user = await User.findById(userId);

  try {
    const storageIds = user.supplierData.storages;
    const storages = await Storage.find({ _id: storageIds });

    return storages;
  } catch (err) {
    console.log(err);
    return { error: 'Could not retrieve storages' };
  }
});
