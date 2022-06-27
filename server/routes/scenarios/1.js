/*
3 users (a, b, c)
-storage1
--product1 0.99€
--product2 3.00€
-storage2
--product1 0.99€

*/
import mongoose from 'mongoose';

export default defineEventHandler(async (event) => {
  console.log('---- Scenario 1 ----');

  // ---- Reset DB ---- //
  const collections = await mongoose.connections[0].collections;

  for (const collection of Object.keys(collections)) {
    try {
      await mongoose.connection.db.dropCollection(collection);
    } catch (err) {
      console.log(collection, 'collection could not be dropped');
    }
  }
  console.log('-Database fully reset!');

  // ---- Create sample data ---- //

  const address1 = await $fetch('/api/addresses', {
    method: 'POST',
    body: {
      street: 'Rua das Marias',
      country: 'Portugal',
      city: 'Lisboa',
      postal: '8943-111'
    }
  });
  const address2 = await $fetch('/api/addresses', {
    method: 'POST',
    body: {
      street: 'Rua feia',
      country: 'Portugal',
      city: 'Lisboa',
      postal: '1234-111'
    }
  });

  let user1 = await $fetch('/api/users', {
    method: 'POST',
    body: { email: 'a@a.com', password: 'Pp123!', address: address1 }
  });

  user1 = await $fetch(`/api/users/${user1._id}`, {
    method: 'PUT',
    body: { address: address2 }
  });

  const user2 = await $fetch('/api/users', {
    method: 'POST',
    body: { email: 'b@b.com', password: 'Pp123!', address: address1 }
  });

  const user3 = await $fetch('/api/users', {
    method: 'POST',
    body: { email: 'c@c.com', password: 'Pp123!', address: address2 }
  });

  // const transport1 = await $fetch('/api/users', {
  //   method: 'POST',
  //   body: { email: 'a@a.com', password: 'Pp123!', address: address1 }
  // });

  await $fetch('/api/polutions', {
    method: 'POST',
    body: {
      name: 'CO2',
      unit: 'g'
    }
  });
  await $fetch('/api/polutions', {
    method: 'POST',
    body: {
      name: 'Ozone',
      unit: 'g'
    }
  });
  await $fetch('/api/polutions', {
    method: 'POST',
    body: {
      name: 'Nitrogen Dioxide',
      unit: 'g'
    }
  });
  await $fetch('/api/polutions', {
    method: 'POST',
    body: {
      name: 'Sulfur Dioxide',
      unit: 'g'
    }
  });
  await $fetch('/api/polutions', {
    method: 'POST',
    body: {
      name: 'Ozone',
      unit: 'g'
    }
  });
  await $fetch('/api/resources', {
    method: 'POST',
    body: {
      name: 'Electric',
      unit: 'kWh',
      type: 'fuel'
    }
  });
  await $fetch('/api/resources', {
    method: 'POST',
    body: {
      name: 'Diesel',
      unit: 'L',
      type: 'fuel'
    }
  });
  await $fetch('/api/resources', {
    method: 'POST',
    body: {
      name: 'Gasoline',
      unit: 'L',
      type: 'fuel'
    }
  });
  await $fetch('/api/resources', {
    method: 'POST',
    body: {
      name: 'Biodiesel',
      unit: 'L',
      type: 'fuel'
    }
  });

  const category1 = await $fetch('/api/categories', {
    method: 'POST',
    body: {
      name: 'main'
    }
  });

  const category2 = await $fetch('/api/categories', {
    method: 'POST',
    body: {
      name: 'food',
      parent: category1
    }
  });

  const category3 = await $fetch('/api/categories', {
    method: 'POST',
    body: {
      name: 'toys',
      parent: category1
    }
  });
  const category4 = await $fetch('/api/categories', {
    method: 'POST',
    body: {
      name: 'phones',
      parent: category1
    }
  });

  const item1 = await $fetch('/api/items', {
    method: 'POST',
    body: {
      name: 'Banana',
      brand: 'Dove',
      description: 'Put it on your face, at your own pace',
      producer: "Dove's food company",
      category: category2
    }
  });

  const item2 = await $fetch('/api/items', {
    method: 'POST',
    body: {
      name: 'Wooden basket',
      brand: 'Homemade',
      description: 'Pela estrada fora eu vou bem sozinha...',
      producer: 'Grandma',
      category: category1
    }
  });

  const item3 = await $fetch('/api/items', {
    method: 'POST',
    body: {
      name: "BO'HO'O'WA'ER",
      brand: 'evian',
      description: 'The most natural water, like, ever :p',
      producer: 'Grandma',
      category: category2
    }
  });

  const storage1 = await $fetch('/api/storages', {
    method: 'POST',
    body: {
      name: 'storage1',
      owner: user1,
      isPublic: true,
      address: address1
    }
  });

  const storage2 = await $fetch('/api/storages', {
    method: 'POST',
    body: {
      name: 'storage2',
      owner: user1,
      isPublic: true,
      address: address2
    }
  });

  const product1 = await $fetch('/api/products', {
    method: 'POST',
    body: {
      name: 'product1',
      item: item1,
      price: 0.99,
      currencyUnit: '€',
      supplier: user1,
      quantity: 3,
      storage: storage1
    }
  });
  const product2 = await $fetch('/api/products', {
    method: 'POST',
    body: {
      name: 'product1',
      item: item1,
      price: 3,
      currencyUnit: '€',
      supplier: user1,
      quantity: 8,
      storage: storage2
    }
  });
  const product3 = await $fetch('/api/products', {
    method: 'POST',
    body: {
      name: 'product2',
      item: item2,
      price: 0.99,
      currencyUnit: '€',
      supplier: user1,
      quantity: 8,
      storage: storage1
    }
  });

  return 'Api reset was successfull!';
});
