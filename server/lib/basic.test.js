import { describe, it } from 'vitest';
import { fileURLToPath } from 'node:url';
import { setup, $fetch } from '@nuxt/test-utils-edge';

describe('test', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixture', import.meta.url))
  });

  it('Create and update user info', async () => {
    // Cria utilizador
    const utilizador = await $fetch('/api/users', {
      method: 'POST',
      body: {
        name: 'Maria Belga',
        password: 'Maria123!',
        email: 'maria@gmail.com'
      }
    });

    console.log('---POST USER---');
    console.log(utilizador);

    // Cria a sua address
    const address1 = await $fetch('/api/addresses', {
      method: 'POST',
      body: {
        street: 'Avenida da Liberdade n120 1A',
        country: 'Portugal',
        city: 'Lisboa',
        zipCode: '5489-123'
      }
    });

    console.log('---POST ADDRESS---');
    console.log(address1);

    // Modifica utilizador
    const utilizador2 = await $fetch(`/api/users/${utilizador._id}`, {
      method: 'PUT',
      body: {
        name: 'Maria Belga Soares',
        phone: '912345672',
        address: address1
      }
    });

    console.log('---PUT USER---');
    console.log(utilizador2);

    // Obter utilizador
    const getutilizador = await $fetch(`/api/users/${utilizador._id}`, {
      method: 'GET'
    });

    console.log('---GET USER---');
    console.log(getutilizador);

    let dbResponse = {
      street: getutilizador.consumerData.address.street,
      country: getutilizador.consumerData.address.country,
      city: getutilizador.consumerData.address.city,
      zipCode: getutilizador.consumerData.address.zipCode,
      email: getutilizador.email
    };

    let expected = {
      street: 'Avenida da Liberdade n120 1A',
      country: 'Portugal',
      city: 'Lisboa',
      zipCode: '5489-123',
      email: 'maria@gmail.com'
    };

    expect(expected).toStrictEqual(dbResponse);
  });
});
