import Category from '~~/server/models/Category';

export default defineEventHandler(async (event) => {
  const { categoryId } = event.context.params;

  try {
    const category = await Category.findById(categoryId);
    return category;
  } catch (err) {
    console.log(err);
    return { error: 'Could not retrieve category' };
  }
});
