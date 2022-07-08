export default defineEventHandler(async (event) => {
  // Cria utilizador
  const utilizador = await $fetch('/api/users', {
    method: 'POST',
    body: {
      name: 'Maria Belga',
      password: 'Maria123!',
      email: 'maria19@gmail.com'
    }
  });

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

  // Modifica utilizador
  const utilizador2 = await $fetch(`/api/users/${utilizador._id}`, {
    method: 'PUT',
    body: {
      name: 'Maria Belga Soares',
      phone: '912345672',
      address: address1
    }
  });

  // Obter utilizador
  const getutilizador = await $fetch(`/api/users/${utilizador._id}`, {
    method: 'GET'
  });

  // Morada do user
  if (
    getutilizador.consumerData.address[0].street !==
    'Avenida da Liberdade n120 1A'
  ) {
    console.log('Street is not ok');
    return 'not ok';
  }
  if (getutilizador.consumerData.address[0].country !== 'Portugal') {
    console.log('Country is ok');
    return 'not ok';
  }
  if (getutilizador.consumerData.address[0].city !== 'Lisboa') {
    console.log('City is ok');
    return 'not ok';
  }
  if (getutilizador.consumerData.address[0].zipCode !== '5489-123') {
    console.log('zipCode is ok');
    return 'not ok';
  }
  // Informação do user
  if (getutilizador.email !== 'maria19@gmail.com') {
    console.log('zipCode is ok');
    return 'not ok';
  }

  return 'okok';
});
