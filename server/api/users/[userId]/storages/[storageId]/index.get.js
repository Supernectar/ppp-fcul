import User from '~~/server/models/User';
import Storage from '~~/server/models/Storage';

export default defineEventHandler(async (event) => {
  const { userId, storageId } = event.context.params;

  try {
    const storage = await Storage.findById(storageId);

    return storage;
  } catch (err) {
    console.log(err);
    return { error: 'Could not retrieve storages' };
  }
});
