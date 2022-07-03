import Polution from '~~/server/models/Polution';

export default defineEventHandler(async (event) => {
  const params = useQuery(event);

  try {
    const polutions = await Polution.find(params);
    return polutions;
  } catch (err) {
    console.log(err);
    return { error: 'Could not get polutions' };
  }
});
