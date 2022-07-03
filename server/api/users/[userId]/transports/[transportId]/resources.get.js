import Transport from '~~/server/models/Transport';
import Resource from '~~/server/models/Resource';

export default defineEventHandler(async (event) => {
  try {
    const { transportId } = event.context.params;
    const transport = await Transport.findOne({ _id: transportId });
    const resourcesIds = transport.resources;
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
    return { error: 'Could not find resources' };
  }
});
