export default defineEventHandler(async (event) => {
  console.log('--- Scenario 5 ---');

  try {
    const address1 = await $fetch('/api/addresses', {
      method: 'POST',
      body: {
        street: 'Rua das Marias',
        country: 'Portugal',
        city: 'Lisboa',
        zipCode: '8955-123'
      }
    });

    let user1 = await $fetch('/api/users', {
      method: 'POST',
      body: { email: 'transport1@test.com', password: 'Pp123!' }
    });

    const transport1 = await $fetch(`/api/users/${user1._id}/transports`, {
      method: 'POST',

      body: {
        brand: 'brand',
        model: 'model',
        status: 'available',
        plate: '012456',
        location: {
          street: 'street',
          country: 'country',
          city: 'city',
          zipCode: 'zipCode'
        }
      }
    });

    return 'good';
  } catch (err) {
    console.log('---', event.req.url, '---');
    console.log(err);
    return 'not Good';
  }
});
