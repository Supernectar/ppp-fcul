import Item from '~~/server/models/Item';

export default defineEventHandler(async (event) => {
  const { itemId } = event.context.params;

  try {
    const item = await Item.findById(itemId)
      .populate('polutions.polution')
      .populate('resources.resource');

      console.log(itemId)
      console.log(item)
    return item;
  } catch (err) {
    console.log(err);
    return { error: 'Could not retrieve item' };
  }
});
