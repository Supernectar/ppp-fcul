import Resource from '~~/server/models/Resource';
import Transport from '~~/server/models/Transport';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  const { quantity, unit } = JSON.parse(await useBody(event));

  try {
    const resource = await Resource.create({
      quantity,
      unit
    });

    // let b = await User.updateOne({ _id: userId });

    const user = await Transport.updateOne(
      { _id: userId },
      {
        $push: {
          'transporterData.vehicles': transport._id
        }
      }
    );
    return transport;
  } catch (err) {
    return err;
  }
});
