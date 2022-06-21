import Item from '~~/server/models/Item';
import Polution from '~~/server/models/Polution';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  try {
    const { itemId } = event.context.params;
    const item = await Item.findOne({ _id: itemId });
    const polutionIds = item.polutions;
    const polutions = [];
    for (let i = 0; i < polutionIds.length; i++) {
      const polution = await Polution.findOne({
        _id: polutionIds[i]
      });
      polutions.push(polution);
    }
    event.res.jsonResponse.context = event.context.params;
    event.res.jsonResponse.data = {
      items: polutions
    };
  } catch (err) {
    console.log(err);
    event.res.jsonResponse.error = err;
  }

  return event.res.jsonResponse;
});
