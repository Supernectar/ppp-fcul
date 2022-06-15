import Category from '~~/server/models/Category';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;

  const params = useQuery(event);
  const categories = await Category.find(params);

  event.res.jsonResponse.data = {
    items: categories
  };
  return event.res.jsonResponse;
});
