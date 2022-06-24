import User from '~~/server/models/User';
import Transport from '~~/server/models/Transport';
import Resource from '~~/server/models/Resource';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  const { brand, model, maxLoad, status, quantity, unit, plate } = JSON.parse(
    await useBody(event)
  );
  const { userId } = event.context.params;

  try {
    const resource = await Resource.create({
      quantity,
      unit
    });
    const resources = [];
    resources.push(resource._id);
    console.log(resources);
    const transport = await Transport.create({
      brand,
      model,
      maxLoad,
      status,
      resources,
      plate,
      owner: userId
    });
    console.log(transport);

    // let b = await User.updateOne({ _id: userId });

    const user = await User.updateOne(
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
