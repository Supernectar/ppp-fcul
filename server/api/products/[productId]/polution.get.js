// import Item from '~~/server/utils/models/Item';
export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  const id = req.params.id;
  Item.findOne({ id }).then((result) => res.send(result.polution));

  return event.res.jsonResponse;
});
