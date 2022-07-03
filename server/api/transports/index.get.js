import Transport from '~~/server/models/Transport';

export default defineEventHandler(async (event) => {
  const params = useQuery(event);

  try {
    const transports = await Transport.find(params)
      .populate('resources.resource')
      .populate('polutions.polution');
  } catch (err) {
    console.log(err);
    return { error: 'Could not find transports' };
  }
});
