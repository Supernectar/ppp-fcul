export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  const status = req.body.status;
  const departureDate = req.body.departureDate;
  const arrivalDate = req.body.arrivalDate;
  User.updateMany(
    { username: id },
    {
      status,
      departureDate,
      arrivalDate
    }
  ).then((result) => res.send(result));

  return event.res.jsonResponse;
});
