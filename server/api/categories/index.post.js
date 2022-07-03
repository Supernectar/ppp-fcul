// import Category from '~~/server/models/Category';
export default defineEventHandler(async (event) => {
  try {
    console.log('Category creation not implemented');
    return { msg: 'Category creation not implemented' };
  } catch (err) {
    return { error: 'Could not create category' };
  }
});
