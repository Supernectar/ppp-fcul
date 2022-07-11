import { describe, it } from 'vitest';
import { fileURLToPath } from 'node:url';
import { setup, $fetch } from '@nuxt/test-utils-edge';

describe('test', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixture', import.meta.url))
  });

  it('Create an order', async () => {
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
        location: user3.transporterData.address
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

    // Criar Produto do Supplier

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
    console.log('--- product --- \n', product1);
    // Cria order

    product1.cartQuantity = 3;

    const order1 = (
      await $fetch(`/api/users/${user1._id}/orders`, {
        method: 'POST',
        body: {
          consumer: user1._id,
          transport: transporte1._id,
          supplier: user2._id,
          status: 'created',
          from: user2.supplierData.address,
          to: user1.consumerData.address,
          products: [product1]
        }
      })
    )[1];

    // GET order
    const order2 = await $fetch(`/api/users/${user1._id}/orders/${order1._id}`);
    // console.log('--', order2);
    // console.log('--', user2.supplierData.address);
    // console.log('---ifs---');
    // /*
    //   if (order2.consumer.email !== 'marlene3@gmail.com') {
    //     return 'not ok1';
    //   }
    //   */

    let dbResponse = {
      brand: order2.transport.brand
      //   from: order2.from.street,
      //   to: order2.to.street,
      //   status: order2.status.name
    };

    let expected = {
      brand: 'Mercedes'
      //   from: user2.supplierData.address.street,
      //   to: user1.consumerData.address.street,
      //   status: 'created'
    };

    expect(expected).toStrictEqual(dbResponse);
  }, 180000);
});
