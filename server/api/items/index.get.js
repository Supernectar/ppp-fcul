import Item from '~~/server/models/Item';

export default defineEventHandler(async (event) => {
  const params = useQuery(event);

  const items = await Item.find(params)
    .populate('polutions')
    .populate('resources');
  return items;
});
