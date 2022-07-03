import Category from '~~/server/models/Category';

export default defineEventHandler(async (event) => {
  const params = useQuery(event);

  try {
    const categories = await Category.find(params);
    return categories;
  } catch (err) {
    console.log(err);
    return { error: 'Could not retrieve categories' };
  }
});
