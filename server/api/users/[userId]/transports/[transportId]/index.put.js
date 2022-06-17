export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  const { userId } = event.context.params;
  const { marca, modelo, maxLoad, status, plate } = JSON.parse(
    await useBody(event)
  );

  // if (userId !== event.req.userId) {
  // 	event.res.jsonResponse.error = {
  // 		message: 'You must be the owner to change this profile'
  // 	};
  // } else {
  try {
    const user = await User.updateOne(
      { _id: userId },
      {
        marca,
        modelo,
        maxLoad,
        status,
        plate
      }
    );
    event.res.jsonResponse.data = {
      transport: [user]
    };
  } catch (err) {
    console.log(err);
    event.res.jsonResponse.error = {
      message: err
    };
  }
  // }
  return event.res.jsonResponse;
});
