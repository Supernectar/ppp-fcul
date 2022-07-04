export default defineEventHandler(async (event) => {
  const address1 = await $fetch('/api/addresses', {
    method: 'POST',
    body: {
      street: 'Rua das Marias',
      country: 'Portugal',
      city: 'Lisboa',
      zipCode: '8955-123'
    }
  });

  return address1;
});
