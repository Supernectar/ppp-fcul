import Transport from '~~/server/models/Transport';
import Resource from '~~/server/models/Resource';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
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
    event.res.jsonResponse.context = event.context.params;
    event.res.jsonResponse.data = {
      items: resources
    };
  } catch (err) {
    console.log(err);
    event.res.jsonResponse.error = err;
  }

  return event.res.jsonResponse;
});
