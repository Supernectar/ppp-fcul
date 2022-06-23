import Item from '~~/server/models/Item';
import Polution from '~~/server/models/Polution';
export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;

  const {
    id,
    name,
    brand,
    description,
    producer,
    exp_date,
    resource,
    category
  } = await useBody(event);

  const tempPolutions = [];
  const polTypes = ['CO2', 'pol2', 'c'];
  for (let i = 0; i < Math.floor(Math.random() * 8) + 2; i++) {
    const pol = await Polution.create({
      type: Math.floor(Math.random() * polTypes.length),
      quantity: Math.floor(Math.random() * 1000) + 500,
      unit: 'kg'
    });

    tempPolutions.push(pol);
  }

  try {
    Item.create({
      id,
      name,
      brand,
      description,
      producer,
      exp_date,
      resource,
      category,
      polutions: tempPolutions
    });
  } catch (err) {
    event.res.jsonResponse.error = {
      message: err
    };
  }
  return event.res.jsonResponse;
});
