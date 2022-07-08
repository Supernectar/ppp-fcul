import User from '~~/server/models/User';
import Transport from '~~/server/models/Transport';
import Resource from '~~/server/models/Resource';
import Polution from '~~/server/models/Polution';

export default defineEventHandler(async (event) => {
  const { brand, model, status, plate, location } = await useBody(event);
  const { userId } = event.context.params;

  try {
    const resources = await Resource.find({ type: 'fuel' });
    const actualResources = [];
    actualResources.push({
      quantity: 5 + Math.floor(Math.random() * (20 - 5)),
      resource: resources[Math.floor(Math.random() * resources.length)]
    });

    const polutions = await Polution.find();
    const actualPolutions = [];
    for (
      let i = 0;
      i < 2 + Math.floor(Math.random() * (polutions.length - 2));
      i++
    ) {
      actualPolutions.push({
        quantity: Math.floor(Math.random() * 40),
        polution: polutions[i]
      });
    }
    const transport = await Transport.create({
      brand,
      model,
      maxLoad: 2 + Math.floor(Math.random() * 20),
      status,
      // quantity: Math.floor(Math.random() * 20),
      resources: actualResources,
      polutions: actualPolutions,
      plate,
      location,
      owner: userId
    });
    // console.log(transport);

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
    console.log('---', event.req.url, '---');
    console.log(err);
    return { error: 'Could not create transport' };
  }
});
