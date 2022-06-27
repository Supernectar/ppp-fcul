import Transport from '~/server/models/Transport';

export default defineEventHandler(async (event) => {
  const { transportId } = event.context.params;

  try {
    await Transport.deleteOne({ _id: transportId });
    return 'Good';
  } catch (err) {
    console.log(err);
    return 'Bad';
  }
});
