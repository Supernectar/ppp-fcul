import Category from '~~/server/models/Category';

export default defineEventHandler(async (event) => {
  const params = useQuery(event);

  try {
    let categories;
    if (params.name) {
      const catNames = params.name.split(',');
      if (catNames.length > 1) {
        categories = await Category.find({ name: { $in: catNames } });
      } else {
        categories = await Category.find(params);
      }
    } else {
      categories = await Category.find(params);
    }

    return categories;
  } catch (err) {
    console.log(err);
    return { error: 'Could not retrieve categories' };
  }
});
