import Polution from '~~/server/models/Polution';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  const params = useQuery(event);

  const polutions = await Polution.find(params);
  event.res.jsonResponse.data = {
    items: [polutions]
  };
  return event.res.jsonResponse;
});
