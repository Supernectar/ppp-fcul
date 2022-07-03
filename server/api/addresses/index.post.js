import Address from '~~/server/models/Address';
export default defineEventHandler(async (event) => {
  const { street, country, city, postal } = await useBody(event);

  try {
    const address = await Address.create({ street, country, city, postal });

    return address;
  } catch (err) {
    console.log(err);
    return { error: 'Could not create address' };
  }
});
