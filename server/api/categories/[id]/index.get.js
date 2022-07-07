import Category from '~~/server/models/Category';

export default defineEventHandler(async (event) => {
  const params = useQuery(event);
  const { id } = event.context.params;
  try {
    const categories = await Category.findById(id);
    return categories;
  } catch (err) {
    console.log(err);
    return { error: 'Could not retrieve categories' };
  }
});
