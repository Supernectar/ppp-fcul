import Item from '~~/server/models/Item';
import Polution from '~~/server/models/Polution';
export default defineEventHandler(async (event) => {
  const {
    id,
    name,
    brand,
    description,
    producer,
    expirationDate,
    resource,
    category,
    imgPath
  } = await useBody(event);

  try {
    const item = Item.create({
      id,
      name,
      brand,
      description,
      producer,
      expirationDate,
      resource,
      category,
      imgPath
    });

    return item;
  } catch (err) {
    console.log(err);
    return { error: 'Could not create item' };
  }
});
