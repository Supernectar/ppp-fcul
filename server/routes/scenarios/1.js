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
      zipCode: '8943-111'
    }
  });
  const address2 = await $fetch('/api/addresses', {
    method: 'POST',
    body: {
      street: 'Rua feia',
      country: 'Portugal',
      city: 'Lisboa',
      zipCode: '1234-111'
    }
  });

  let user1 = await $fetch('/api/users', {
    method: 'POST',
    body: { email: 'a@a.com', password: 'Pp123!' }
  });

  user1 = await $fetch(`/api/users/${user1._id}`, {
    method: 'PUT',
    body: { address: address2 }
  });

  let user2 = await $fetch('/api/users', {
    method: 'POST',
    body: { email: 'b@b.com', password: 'Pp123!' }
  });

  user2 = await $fetch(`/api/users/${user2._id}`, {
    method: 'PUT',
    body: { address: address2 }
  });

  let user3 = await $fetch('/api/users', {
    method: 'POST',
    body: { email: 'c@c.com', password: 'Pp123!' }
  });

  user3 = await $fetch(`/api/users/${user3._id}`, {
    method: 'PUT',
    body: { address: address1 }
  });

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
      name: 'Others',
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

  const transport1 = await $fetch(`/api/users/${user2._id}/transports`, {
    method: 'POST',
    body: {
      brand: 'brand',
      model: 'model',
      status: 'available',
      plate: '222',
      location: {
        street: 'street',
        country: 'country',
        city: 'city',
        zipCode: '8883-778'
      }
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
      parent: category1,
      imgPath: '/categories/food.png'
    }
  });

  const category3 = await $fetch('/api/categories', {
    method: 'POST',
    body: {
      name: 'toys',
      parent: category1,
      imgPath: '/categories/toys.png'
    }
  });
  const category4 = await $fetch('/api/categories', {
    method: 'POST',
    body: {
      name: 'tecnologies',
      parent: category1,
      imgPath: '/categories/tecnologies.png'
    }
  });
  const category5 = await $fetch('/api/categories', {
    method: 'POST',
    body: {
      name: 'vehicles',
      parent: category1,
      imgPath: '/categories/vehicles.png'
    }
  });
  const category6 = await $fetch('/api/categories', {
    method: 'POST',
    body: {
      name: 'gaming',
      parent: category1,
      imgPath: '/categories/gaming.png'
    }
  });
  const category7 = await $fetch('/api/categories', {
    method: 'POST',
    body: {
      name: 'clothing',
      parent: category1,
      imgPath: '/categories/clothing.png'
    }
  });
  const category8 = await $fetch('/api/categories', {
    method: 'POST',
    body: {
      name: 'bikes',
      parent: category5,
      imgPath: '/categories/bikes.png'
    }
  });
  const category9 = await $fetch('/api/categories', {
    method: 'POST',
    body: {
      name: 'trucks',
      parent: category5,
      imgPath: '/categories/trucks.png'
    }
  });
  const category10 = await $fetch('/api/categories', {
    method: 'POST',
    body: {
      name: 'bicycles',
      parent: category5,
      imgPath: '/categories/bicycles.png'
    }
  });
  const category11 = await $fetch('/api/categories', {
    method: 'POST',
    body: {
      name: 'light vehicles',
      parent: category5,
      imgPath: '/categories/lightVehicles.png'
    }
  });

  // Create item1
  let item1 = await $fetch('/api/items', {
    method: 'POST',
    body: {
      name: 'Máquina Fotográfica',
      description: 'Máquina Fotográfica HD',
      producer: 'Canon Enterprise',
      category: category4,
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
  item1 = await $fetch(`/api/items/${item1._id}/attributes`, {
    method: 'POST',
    body: {
      name: 'capacity',
      value: '1Gb'
    }
  });

  let item2 = await $fetch('/api/items', {
    method: 'POST',
    body: {
      name: 'Mesa de madeira',
      description: 'mesa detalhada',
      producer: 'Comforama',
      expirationDate: new Date(),
      category: category1,
      imgPath: '/items/P4240.jpg'
    }
  });
  item2 = await $fetch(`/api/items/${item2._id}/attributes`, {
    method: 'POST',
    body: {
      name: 'brand',
      value: 'Conforama'
    }
  });

  let item3 = await $fetch('/api/items', {
    method: 'POST',
    body: {
      name: 'Iphone',
      brand: 'Apple',
      description: 'Iphone 12 plus',
      producer: 'Apple',
      expirationDate: new Date(),
      category: category4,
      imgPath: '/items/iphone-12-64-go-bleu.jpg'
    }
  });
  item3 = await $fetch(`/api/items/${item3._id}/attributes`, {
    method: 'POST',
    body: {
      name: 'brand',
      value: 'Apple'
    }
  });
  item3 = await $fetch(`/api/items/${item3._id}/attributes`, {
    method: 'POST',
    body: {
      name: 'color',
      value: 'black'
    }
  });

  // Create item2
  let item4 = await $fetch('/api/items', {
    method: 'POST',
    body: {
      name: 'Caneta Esferográfica BIC',
      description: 'Esferográfica Azul',
      producer: 'BIC Enterprise',
      category: category1,
      imgPath: 'items/caneta-bic.png'
    }
  });
  item4 = await $fetch(`/api/items/${item4._id}/attributes`, {
    method: 'POST',
    body: {
      name: 'brand',
      value: 'BIC'
    }
  });
  item4 = await $fetch(`/api/items/${item4._id}/attributes`, {
    method: 'POST',
    body: {
      name: 'color',
      value: 'white'
    }
  });
  item4 = await $fetch(`/api/items/${item4._id}/attributes`, {
    method: 'POST',
    body: {
      name: 'ink',
      value: 'blue'
    }
  });

  // Create item2
  let item5 = await $fetch('/api/items', {
    method: 'POST',
    body: {
      name: 'Carrinho de Brincar',
      description: 'Carrinho para crianças com mais 5 anos',
      producer: 'Lego Enterprise.',
      category: category3,
      imgPath:
        '/items/Screenshot-2022-01-03-at-15-23-53-Carro-Desportivo-60285-City-Compra-online-na-Loja-LEGO-Oficial-PT.png'
    }
  });
  item5 = await $fetch(`/api/items/${item5._id}/attributes`, {
    method: 'POST',
    body: {
      name: 'brand',
      value: 'Lego'
    }
  });
  item5 = await $fetch(`/api/items/${item5._id}/attributes`, {
    method: 'POST',
    body: {
      name: 'color',
      value: 'blue'
    }
  });
  item5 = await $fetch(`/api/items/${item5._id}/attributes`, {
    method: 'POST',
    body: {
      name: 'height',
      value: '20cm'
    }
  });
  item5 = await $fetch(`/api/items/${item5._id}/attributes`, {
    method: 'POST',
    body: {
      name: 'length',
      value: '25cm'
    }
  });
  item5 = await $fetch(`/api/items/${item5._id}/attributes`, {
    method: 'POST',
    body: {
      name: 'width',
      value: '10cm'
    }
  });

  let item6 = await $fetch('/api/items', {
    method: 'POST',
    body: {
      name: 'Melância',
      description: 'Fruto',
      producer: 'Fruta das quintas',
      category: category2,
      imgPath: '/items/Melancia.png'
    }
  });
  item6 = await $fetch(`/api/items/${item6._id}/attributes`, {
    method: 'POST',
    body: {
      name: 'brand',
      value: 'FrutaFresca'
    }
  });
  item6 = await $fetch(`/api/items/${item6._id}/attributes`, {
    method: 'POST',
    body: {
      name: 'weight',
      value: '6Kg'
    }
  });

  let item7 = await $fetch('/api/items', {
    method: 'POST',
    body: {
      name: 'Ténis Nike',
      description: 'Ténis leves, ideais para a corrida',
      producer: 'Nike Enterprise.',
      category: category7,
      imgPath: '/items/627.png'
    }
  });
  item7 = await $fetch(`/api/items/${item7._id}/attributes`, {
    method: 'POST',
    body: {
      name: 'color',
      value: 'blue'
    }
  });
  item7 = await $fetch(`/api/items/${item7._id}/attributes`, {
    method: 'POST',
    body: {
      name: 'size',
      value: '39'
    }
  });

  let item8 = await $fetch('/api/items', {
    method: 'POST',
    body: {
      name: 'Garrafa de água',
      description: 'Água natural dos Alpes',
      producer: 'Evian Enterprise',
      category: category2,
      imgPath: '/items/58001011_1.jpg'
    }
  });
  item8 = await $fetch(`/api/items/${item8._id}/attributes`, {
    method: 'POST',
    body: {
      name: 'brand',
      value: 'Evian'
    }
  });
  item8 = await $fetch(`/api/items/${item8._id}/attributes`, {
    method: 'POST',
    body: {
      name: 'liters',
      value: '1.5L'
    }
  });
  item8 = await $fetch(`/api/items/${item8._id}/attributes`, {
    method: 'POST',
    body: {
      name: 'color',
      value: 'pink'
    }
  });

  const storage1 = await $fetch('/api/storages', {
    method: 'POST',
    body: {
      name: 'storage1',
      owner: user1,
      isPublic: true,
      address: address1._id
    }
  });

  const storage2 = await $fetch('/api/storages', {
    method: 'POST',
    body: {
      name: 'storage2',
      owner: user2,
      isPublic: true,
      address: address2._id
    }
  });

  const product1 = await $fetch('/api/products', {
    method: 'POST',
    body: {
      name: 'product!',
      itemId: item1,
      price: 200.0,
      currencyUnit: '€',
      supplier: user1,
      quantity: 3,
      storages: [storage1],
      stripeId: 'price_1LGYscAIdQC80EPdjxdetCta'
    }
  });
  const product2 = await $fetch('/api/products', {
    method: 'POST',
    body: {
      name: 'producté',
      itemId: item1,
      price: 400.0,
      currencyUnit: '€',
      supplier: user2,
      quantity: 8,
      storages: [storage2],
      stripeId: 'price_1LJfoPAIdQC80EPdTgwP1UkY'
    }
  });
  const product3 = await $fetch('/api/products', {
    method: 'POST',
    body: {
      name: 'product2',
      itemId: item2,
      price: 300.0,
      currencyUnit: '€',
      supplier: user2,
      quantity: 8,
      storages: [storage2],
      stripeId: 'price_1LHtfaAIdQC80EPdohvIdLYZ'
    }
  });
  // Carrrinhos de Brincar
  const product4 = await $fetch('/api/products', {
    method: 'POST',
    body: {
      name: 'product4',
      itemId: item5,
      price: 29.0,
      currencyUnit: '€',
      supplier: user2,
      quantity: 10,
      storages: [storage2],
      stripeId: 'price_1LGYzaAIdQC80EPdsif0qMi9'
    }
  });

  const product5 = await $fetch('/api/products', {
    method: 'POST',
    body: {
      name: 'product5',
      itemId: item5,
      price: 24.0,
      currencyUnit: '€',
      supplier: user1,
      quantity: 7,
      storages: [storage1],
      stripeId: 'price_1LKNujAIdQC80EPdEWHb3aKJ'
    }
  });

  // Águas
  const product6 = await $fetch('/api/products', {
    method: 'POST',
    body: {
      name: 'product6',
      itemId: item8,
      price: 1.5,
      currencyUnit: '€',
      supplier: user2,
      quantity: 10,
      storages: [storage2],
      stripeId: 'price_1LGYx8AIdQC80EPd95Klx7AQ'
    }
  });

  const product7 = await $fetch('/api/products', {
    method: 'POST',
    body: {
      name: 'product7',
      itemId: item8,
      price: 1.1,
      currencyUnit: '€',
      supplier: user1,
      quantity: 7,
      storages: [storage1],
      stripeId: 'price_1LKNzaAIdQC80EPdeYssvBmV'
    }
  });

  // Iphone
  const product8 = await $fetch('/api/products', {
    method: 'POST',
    body: {
      name: 'product8',
      itemId: item3,
      price: 900.0,
      currencyUnit: '€',
      supplier: user2,
      quantity: 10,
      storages: [storage2],
      stripeId: 'price_1LGZ0FAIdQC80EPd0htRRwht'
    }
  });

  const product9 = await $fetch('/api/products', {
    method: 'POST',
    body: {
      name: 'product9',
      itemId: item3,
      price: 999.0,
      currencyUnit: '€',
      supplier: user1,
      quantity: 7,
      storages: [storage1],
      stripeId: 'price_1LKO7NAIdQC80EPdzRNDppVN'
    }
  });

  // Caneta BIC
  const product10 = await $fetch('/api/products', {
    method: 'POST',
    body: {
      name: 'product10',
      itemId: item4,
      price: 1.0,
      currencyUnit: '€',
      supplier: user2,
      quantity: 10,
      storages: [storage2],
      stripeId: 'price_1LGYttAIdQC80EPdkG6aq1Qq'
    }
  });

  const product11 = await $fetch('/api/products', {
    method: 'POST',
    body: {
      name: 'product11',
      itemId: item4,
      price: 1.5,
      currencyUnit: '€',
      supplier: user1,
      quantity: 7,
      storages: [storage1],
      stripeId: 'price_1LKOB0AIdQC80EPduKwbQlww'
    }
  });

  // Melância
  const product12 = await $fetch('/api/products', {
    method: 'POST',
    body: {
      name: 'product12',
      itemId: item6,
      price: 4.0,
      currencyUnit: '€',
      supplier: user2,
      quantity: 10,
      storages: [storage2],
      stripeId: 'price_1LGYwMAIdQC80EPdcGmayIo6'
    }
  });

  const product13 = await $fetch('/api/products', {
    method: 'POST',
    body: {
      name: 'product13',
      itemId: item6,
      price: 1.5,
      currencyUnit: '€',
      supplier: user1,
      quantity: 7,
      storages: [storage1],
      stripeId: 'price_1LKOFvAIdQC80EPd9881ieGt'
    }
  });

  // Ténis Nike
  const product14 = await $fetch('/api/products', {
    method: 'POST',
    body: {
      name: 'product12',
      itemId: item7,
      price: 60.0,
      currencyUnit: '€',
      supplier: user2,
      quantity: 10,
      storages: [storage2],
      stripeId: 'price_1LGYykAIdQC80EPdEzvCX2jK'
    }
  });

  const product15 = await $fetch('/api/products', {
    method: 'POST',
    body: {
      name: 'product13',
      itemId: item7,
      price: 55.0,
      currencyUnit: '€',
      supplier: user1,
      quantity: 7,
      storages: [storage1],
      stripeId: 'price_1LKOHkAIdQC80EPdqKf1ks3x'
    }
  });
  console.log('Api reset was successful');
  return 'Api reset was successfull!';
});
