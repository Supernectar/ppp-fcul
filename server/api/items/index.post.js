import Item from '~~/server/models/Item';

export default defineEventHandler(async (event) => {
  const { name, brand, description, producer, category } = await useBody(event);

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const polutions = await $fetch('/api/polutions');
  const shuffledArr = shuffle(polutions);

  const numPolutions = 2 + Math.floor(Math.random() * polutions.length - 2);
  const tempPolutions = shuffledArr.slice(0, numPolutions);
  const actualPolutions = [];
  for (const polution of tempPolutions) {
    actualPolutions.push({
      quantity: Math.floor(Math.random() * 400),
      polution
    });
  }

  try {
    const item = Item.create({
      name,
      brand,
      description,
      producer,
      // resources,
      category,
      polutions: actualPolutions
    });
    return item;
  } catch (err) {
    console.log(err);
    return { error: 'could not create item' };
  }
});
