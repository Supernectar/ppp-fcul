import Storage from '~~/server/models/Storage';
import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
  try {
    const { userId, storageId } = event.context.params;
    const storageUser = await User.updateOne(
      { _id: userId },
      {
        $pull: {
          'supplierData.storages': storageId
        }
      }
    );
    await Storage.deleteMany({
      _id: storageId
    });

    return 'Good';
  } catch (err) {
    console.log(err);
    return { error: 'Could not delete storage' };
  }
});
