import Polution from '~~/server/models/Polution';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  const params = useQuery(event);
  const { id } = event.context.params;
  const polutions = await Polution.findById(id);
  event.res.jsonResponse.data = {
    items: [polutions]
  };
  return event.res.jsonResponse;
});
