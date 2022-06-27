import Polution from '~~/server/models/Polution';
export default defineEventHandler(async (event) => {
  const { name, unit } = await useBody(event);

  try {
    const polution = await Polution.create({ name, unit });

    return polution;
  } catch (err) {
    console.log(err);
    return { error: 'Could not create polution' };
  }
});
