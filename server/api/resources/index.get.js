import Resource from '~~/server/models/Resource';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  const params = useQuery(event);

  const resources = await Resource.find(params);

  return resources;
});
