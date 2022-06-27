import Storage from '~~/server/models/Storage';
import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
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
    return 'good';
  } catch (err) {
    console.log(err);
    return { error: 'Could not delete storage' };
  }
});
