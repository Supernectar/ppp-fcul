import Transport from '~~/server/models/Transport';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  const params = useQuery(event);

  const transports = await Transport.find(params);
  event.res.jsonResponse.data = {
    transports
  };
  return event.res.jsonResponse;
});
