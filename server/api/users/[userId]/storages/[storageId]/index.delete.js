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
    event.res.jsonResponse.context = event.context.params;
    event.res.jsonResponse.data = {
      items: storageUser
    };
  } catch (err) {
    console.log(err);
    event.res.jsonResponse.error = err;
  }

  return event.res.jsonResponse;
});
