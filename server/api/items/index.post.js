import Item from '~~/server/models/Item';
export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;

  const {
    id,
    name,
    type,
    subtype,
    brand,
    description,
    producer,
    exp_date,
    polution,
    resource,
    category
  } = await useBody(event);

  try {
    const result = Item.create({
      id,
      name,
      // type: type,
      // subtype: subtype,
      brand,
      description,
      producer,
      exp_date,
      polution,
      resource,
      category
    });
  } catch (err) {
    event.res.jsonResponse.error = {
      message: err
    };
  }
  return event.res.jsonResponse;
});
