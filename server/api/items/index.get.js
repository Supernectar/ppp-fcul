import Item from '~~/server/models/Item';

export default defineEventHandler(async (event) => {
  const params = useQuery(event);

  try {
    let items;
    if (params.category) {
      const catNames = params.category.split(',');

      if (catNames.length > 1) {
        items = await Item.find({ category: { $in: catNames } });
      } else {
        items = await Item.find(params);
      }
    } else {
      items = await Item.find(params);
    }
    return items;
  } catch (err) {
    console.log('---', event.req.url, '---');
    console.log(err);
    return { error: 'Could not retrieve items' };
  }
});
