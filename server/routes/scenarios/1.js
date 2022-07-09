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

  const transport1 = await $fetch('/api/transports', {
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

  // Create item1
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
      imgPath: '/items/627.png'
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
      category: category3,
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
      category: category3,
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
      category: category1,
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
      category: category3,
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
      stripeId: 'price_1LGYscAIdQC80EPdjxdetCta'
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

  console.log('Api reset was successful');
  return 'Api reset was successfull!';
});
