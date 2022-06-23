import Item from '~~/server/models/Item';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  const params = useQuery(event);

  const items = await Item.find(params)
    .populate('polutions')
    .populate('resources');
  event.res.jsonResponse.data = {
    items
  };
  return event.res.jsonResponse;
});
