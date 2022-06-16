export default defineEventHandler((event) => {
  event.res.jsonResponse.context = event.context.params;
  const id = req.body.id;
  const maxLoad = req.body.max_load;
  const status = req.body.status;
  const plate = req.body.plate;
  Transport.insertMany({
    id,
    maxLoad,
    status,
    plate
  }).then((result) => res.send(result));

  return event.res.jsonResponse;
});
