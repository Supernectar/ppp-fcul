import Resource from '~~/server/models/Resource';

export default defineEventHandler(async (event) => {
  const params = useQuery(event);

  try {
    const resources = await Resource.find(params);

    return resources;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find resources' };
  }
});
