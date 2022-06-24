import User from '~~/server/models/User';
import Storage from '~~/server/models/Storage';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  try {
    const { userId } = event.context.params;
    const user = await User.findById(userId);
    const storageIds = user.supplierData.storages;
    const storages = await Storage.find({ _id: storageIds });
    event.res.jsonResponse.data = {
      items: storages
    };
  } catch (err) {
    event.res.jsonResponse.error = err;
  }

  return event.res.jsonResponse;
});
