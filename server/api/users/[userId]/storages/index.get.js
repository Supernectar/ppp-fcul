import User from '~~/server/models/User';
import Storage from '~~/server/models/Storage';
import Address from '~~/server/models/Address';

export default defineEventHandler(async (event) => {
  const { userId } = event.context.params;
  try {
    const user = await User.findById(userId);

    const storageIds = user.supplierData.storages;
    const storages = await Storage.find({ _id: storageIds }).populate({
      path: 'address',
      model: Address
    });

    return storages;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find storages' };
  }
});
