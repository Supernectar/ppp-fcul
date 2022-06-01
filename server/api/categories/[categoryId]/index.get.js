import Category from "~~/server/utils/models/Category";

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  try {
    const { categoryId } = event.context.params;

    let category = await Category.find({ _id: categoryId });
    event.res.jsonResponse.context = event.context.params;
    event.res.jsonResponse.data = {
      items: category,
    };
  } catch (err) {
    console.log(err);

    event.res.jsonResponse.error = err;
  }

  return event.res.jsonResponse;
});
