import User from '~~/server/models/User';
import Transport from '~~/server/models/Transport';

export default defineEventHandler(async (event) => {
  const { brand, model, maxLoad, status, plate } = JSON.parse(
    await useBody(event)
  );
  const { userId } = event.context.params;

  try {
    const transport = await Transport.create({
      brand,
      model,
      maxLoad,
      status,
      plate
    });

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
    console.log(err);
    return { error: 'Could not insert transport' };
  }
});
