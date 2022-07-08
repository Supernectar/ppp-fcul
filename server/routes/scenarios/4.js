export default defineEventHandler(async (event) => {
  //Criar o user e a sua address
  try {
    const address2 = await $fetch('/api/addresses', {
      method: 'POST',
      body: {
        street: 'Rua do elogio',
        country: 'Portugal',
        city: 'Lisboa',
        zipCode: '1444-122'
      }
    });

    let user1 = await $fetch('/api/users', {
      method: 'POST',
      body: { email: 'marlene3@gmail.com', password: 'Marlene123!' }
    });

    user1 = await $fetch(`/api/users/${user1._id}`, {
      method: 'PUT',
      body: { address: address2 }
    });

    //Criar supplier

    const address3 = await $fetch('/api/addresses', {
      method: 'POST',
      body: {
        street: 'Rua verde',
        country: 'Portugal',
        city: 'Lisboa',
        zipCode: '1544-152'
      }
    });

    let user2 = await $fetch('/api/users', {
      method: 'POST',
      body: { email: 'mario3@gmail.com', password: 'Mario123!' }
    });

    user2 = await $fetch(`/api/users/${user2._id}`, {
      method: 'PUT',
      body: { address: address3 }
    });

    //Criar transporter

    const address4 = await $fetch('/api/addresses', {
      method: 'POST',
      body: {
        street: 'Rua das plantas',
        country: 'Portugal',
        city: 'Lisboa',
        zipCode: '1444-332'
      }
    });

    let user3 = await $fetch('/api/users', {
      method: 'POST',
      body: { email: 'joao3@gmail.com', password: 'Joao123!' }
    });

    user3 = await $fetch(`/api/users/${user3._id}`, {
      method: 'PUT',
      body: { address: address4 }
    });

    //Criar transporte

    const transporte1 = await $fetch(`/api/users/${user3._id}/transports`, {
      method: 'POST',
      body: {
        brand: 'Mercedes',
        model: '12-A',
        //   maxLoad: 100,
        status: 'available',
        plate: '1234-A-44',
        location: user3.transporterData.address[0]
      }
    });
    // Categoria
    const category1 = await $fetch('/api/categories', {
      method: 'POST',
      body: {
        name: 'mainfafa'
      }
    });

    const category2 = await $fetch('/api/categories', {
      method: 'POST',
      body: {
        name: 'baby toys',
        parent: category1
      }
    });

    //Criar Item do Supplier

    let item1 = await $fetch('/api/items', {
      method: 'POST',
      body: {
        name: 'Peluche da Marie',
        description: 'Peluche fofinhp',
        producer: 'Aristocats',
        category: category2,
        imgPath: '/items/1505-1.jpg'
      }
    });
    item1 = await $fetch(`/api/items/${item1._id}/attributes`, {
      method: 'POST',
      body: {
        name: 'brand',
        value: 'Aristocats'
      }
    });
    item1 = await $fetch(`/api/items/${item1._id}/attributes`, {
      method: 'POST',
      body: {
        name: 'color',
        value: 'white'
      }
    });

    // Cria Storage do Supplier

    const storage1 = await $fetch('/api/storages', {
      method: 'POST',
      body: {
        name: 'storage1',
        owner: user2._id,
        isPublic: true,
        address: address3._id
      }
    });

    //Criar Produto do Supplier

    const product1 = await $fetch('/api/products', {
      method: 'POST',
      body: {
        name: 'product!',
        item: item1,
        price: 20.99,
        currencyUnit: '€',
        supplier: user2._id,
        quantity: 5,
        storages: [storage1],
        stripeId: 'price_1LGYscAIdQC80EPdjxdetCta'
      }
    });

    // Cria order
    console.log('aaaaaaaaa');
    console.log(user1);
    console.log(transporte1);
    console.log(user2);
    const order1 = await $fetch(`/api/users/${user1._id}/orders`, {
      method: 'POST',
      body: {
        consumer: user1._id,
        transport: transporte1,
        supplier: user2._id,
        status: 'on going',
        from: user2.supplierData.address[0],
        to: user2.supplierData.address[1],
        products: [product1]
      }
    });

    // GET order
    const order2 = await $fetch(
      `/api/users/${user1._id}/orders/${order1._id}`,
      {
        method: 'GET'
      }
    );

    if (order2.consumer.email !== 'marlene3@gmail.com') {
      return 'not ok';
    }
    if (order2.transport.brand !== 'Mercedes') {
      return 'not ok';
    }
    if (order2.from !== user2.address) {
      return 'not ok';
    }
    if (order2.to !== user1.address) {
      return 'not ok';
    }
    for (const product of order2.products) {
      if (product.name !== 'product!') {
        return 'not ok';
      }
      if (product.price !== 20.99) {
        return 'not ok';
      }
      if (product.currencyUnit !== '€') {
        return 'not ok';
      }
      if (product.quantity !== 5) {
        return 'not ok';
      }
      if (product.storages[0].name !== 'storage1') {
        return 'not ok';
      }
      if (product.stripeId !== 'price_1LGYscAIdQC80EPdjxdetCta') {
        return 'not ok';
      }
    }
    if (order2.status !== 'on going') {
      return 'not ok';
    }
    return 'okok';
  } catch (err) {
    console.log('---', event.req.url, '---');
    console.log(err);
    return 'not ok';
  }
});
