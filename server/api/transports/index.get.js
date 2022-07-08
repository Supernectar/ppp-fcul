import Transport from '~~/server/models/Transport';
import Resource from '~~/server/models/Resource';
import Polution from '~~/server/models/Polution';

export default defineEventHandler(async (event) => {
  const params = useQuery(event);

  try {
    const transports = await Transport.find(params)
      // .populate('resources.resource')
      .populate({ path: 'resources.resource', model: Resource })
      // .populate('polutions.polution');
      .populate({ path: 'polutions.polution', model: Polution });
    return transports;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find transports' };
  }
});
