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

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ---- Generate random polutions ---- //
  const polutions = await $fetch('/api/polutions');
  const shuffledPolutions = shuffle(polutions);

  const numPolutions =
    Math.floor(Math.random() * (polutions.length - 2 + 1)) + 2;
  const tempPolutions = shuffledPolutions.slice(0, numPolutions);
  const actualPolutions = [];
  for (const polution of tempPolutions) {
    actualPolutions.push({
      quantity: Math.floor(Math.random() * 400),
      polution
    });
  }

  // ---- Generate random resources ---- //
  const resources = await $fetch('/api/resources');
  const shuffledResources = shuffle(resources);

  const numResources =
    Math.floor(Math.random() * (resources.length - 2 + 1)) + 2;
  const tempResources = shuffledResources.slice(0, numResources);
  const actualResources = [];
  for (const resource of tempResources) {
    actualResources.push({
      quantity: Math.floor(Math.random() * 400),
      resource
    });
  }

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
      polutions: actualPolutions,
      resources: actualResources,
      imgPath
    });

    return item;
  } catch (err) {
    console.log(err);
    return { error: 'Could not create item' };
  }
});
