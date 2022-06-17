export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  // const authHeader = req.headers.authorization;
  // const token = authHeader && authHeader.split(' ')[1];

  // try {

  // const decoded = await jwt.verify(token, 'secretkey');

  // const { id } = req.params;

  // const transport = await Transport.findById(id);

  // if (!transport) {
  //   res.status = 404;
  //   res.send('transport not found');
  // } else if (transport.owner !== decoded.user._id) {
  //   res.json({
  //     error: 'You must be the owner to change this transport'
  //   });
  // } else {
  const transport = await Transport.deleteOne({ _id: id });

  //   }
  // } catch (err) {
  //   console.log(err);
  //   res.json(err);
  // }

  return event.res.jsonResponse;
});
