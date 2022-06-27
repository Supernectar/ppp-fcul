import Resource from '~~/server/models/Resource';
export default defineEventHandler(async (event) => {
  const { name, unit, type } = await useBody(event);

  try {
    const resource = await Resource.create({ name, unit, type });

    return resource;
  } catch (err) {
    console.log(err);
    return { error: 'Could not create polution' };
  }
});
