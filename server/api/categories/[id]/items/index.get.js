import Item from '~~/server/models/Item';

export default defineEventHandler(async (event) => {
  const params = useQuery(event);
  const { id } = event.context.params;
  try {
    const items = await Item.find({ category: id });

    return items;
  } catch (err) {
    console.log(err);
    return { error: 'Could not retrieve items' };
  }
});
