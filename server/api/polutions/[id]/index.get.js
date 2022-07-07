import Polution from '~~/server/models/Polution';

export default defineEventHandler(async (event) => {
  const params = useQuery(event);
  const { id } = event.context.params;

  try {
    const polution = await Polution.findById(id);
    return polution;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find pollution' };
  }
});
