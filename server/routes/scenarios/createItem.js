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

    let item1 = await $fetch('/api/items', {
      method: 'POST',
      body: {
        name: 'Máquina Fotográfica',
        description: 'Máquina Fotográfica HD',
        producer: 'Canon Enterprise',
        category: category2,
        imgPath: '/items/1505-1.jpg'
      }
    });
    item1 = await $fetch(`/api/items/${item1._id}/attributes`, {
      method: 'POST',
      body: {
        name: 'brand',
        value: 'Canon'
      }
    });
    item1 = await $fetch(`/api/items/${item1._id}/attributes`, {
      method: 'POST',
      body: {
        name: 'color',
        value: 'black'
      }
    });

    return 'good';
  } catch (err) {
    console.log(err);
    return 'not Good';
  }
});
