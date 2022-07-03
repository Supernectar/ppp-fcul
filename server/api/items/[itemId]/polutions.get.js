import Item from '~~/server/models/Item';
import Polution from '~~/server/models/Polution';

export default defineEventHandler(async (event) => {
  const { itemId } = event.context.params;

  try {
    const item = await Item.findById(itemId);
    const polutionIds = item.polutions;
    const polutions = [];
    for (let i = 0; i < polutionIds.length; i++) {
      const polution = await Polution.findById(polutionIds[i]);
      polutions.push(polution);
    }

    return polutions;
  } catch (err) {
    console.log(err);
    return { error: 'Could not retrieve polutions' };
  }
});
