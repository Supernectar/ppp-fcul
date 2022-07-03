import User from '~~/server/models/User';
import Storage from '~~/server/models/Storage';

export default defineEventHandler(async (event) => {
  try {
    const { userId, storageId } = event.context.params;
    const user = await User.findOne({ _id: userId });
    // const storageIds = user.supplierData.storages;
    const storages = await Storage.findById(storageId);

    return storages;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find storages' };
  }
});
