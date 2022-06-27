import Transport from '~~/server/models/Transport';

export default defineEventHandler(async (event) => {
  const params = useQuery(event);

  const transports = await Transport.find(params)
    .populate('resources.resource')
    .populate('polutions.polution');

  return transports;
});
