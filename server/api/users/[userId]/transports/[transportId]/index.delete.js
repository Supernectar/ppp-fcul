import Transport from '~/server/models/Transport';

export default defineEventHandler(async (event) => {
  // const authHeader = req.headers.authorization;
  // const token = authHeader && authHeader.split(' ')[1];

  // try {

  // const decoded = await jwt.verify(token, 'secretkey');

  const { transportId } = event.context.params;

  // const transport = await Transport.findById(id);

  // if (!transport) {
  //   res.status = 404;
  //   res.send('transport not found');
  // } else if (transport.owner !== decoded.user._id) {
  //   res.json({
  //     error: 'You must be the owner to change this transport'
  //   });
  // } else {
  try {
    await Transport.deleteOne({ _id: transportId });
    return 'Good';
  } catch (err) {
    console.log(err);
    return { error: 'Could not delete transport' };
  }
});
