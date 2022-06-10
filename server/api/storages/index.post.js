import Storage from "~~/server/models/Storage";

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;

  try {
    let { name, location } = await useBody(event);

    let storage = await Storage.create({
      name: name,
      location: location,
      // owner: decoded.user
    });

    // let user = await User.updateOne(decoded.user, {
    // 	$push: { storages: storage }
    // });

    return storage;
  } catch (err) {
    return err;
  }
});
