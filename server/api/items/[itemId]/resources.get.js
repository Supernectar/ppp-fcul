import Item from '~~/server/models/Item';
import Resource from '~~/server/models/Resource';

export default defineEventHandler(async (event) => {
  const { itemId } = event.context.params;

  try {
    const item = await Item.findById(itemId);
    const resourcesIds = item.resources;
    const resources = [];
    for (let i = 0; i < resourcesIds.length; i++) {
      const resource = await Resource.findOne({
        _id: resourcesIds[i]
      });
      resources.push(resource);
    }
    return resources;
  } catch (err) {
    console.log(err);
    return { error: 'Could not retrieve resources' };
  }
});
