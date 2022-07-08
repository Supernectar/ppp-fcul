import Category from '~~/server/models/Category';

export default defineEventHandler(async (event) => {
  const { name, parent } = await useBody(event);
  try {
    const category = await Category.create({ name, parent });
    await Category.findByIdAndUpdate(parent, {
      $push: {
        children: category
      }
    });

    return category;
  } catch (err) {
    console.log('---', event.req.url, '---');
    console.log(err);
    return { error: 'Could not create category' };
  }
});
