import Item from '~~/server/models/Item';

export default defineEventHandler(async (event) => {
  const { itemId } = event.context.params;

  const { name, value } = await useBody(event);

  try {
    await Item.findByIdAndUpdate(itemId, {
      $push: {
        attributes: { name, value }
      }
    });
    const item = await Item.findById(itemId);

    return item;
  } catch (err) {
    console.log('---', event.req.url, '---');
    console.log(err);
    return { error: 'Could not retrieve item' };
  }
});
