import Transport from '~~/server/models/Transport';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;

  try {
    const transports = await Transport.find();

    return transports;
  } catch (err) {
    console.log(err);
    return { error: 'Could not retrieve transports' };
  }
});
