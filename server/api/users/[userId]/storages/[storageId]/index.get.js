export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  try {
    const decoded = await jwt.verify(token, 'secretkey');

    const { id } = req.params;

    const storage = await Storage.findById(id);

    if (!storage) {
      res.status = 404;
      res.send('storage not found');
    } else if (storage.visibility == 'private') {
      if (storage.owner != decoded.user._id) {
        res.status(401);
        res.send('storage visibility is private');
      } else res.json(storage);
    } else res.json(storage);
  } catch (err) {
    res.send(err);
  }

  return event.res.jsonResponse;
});
