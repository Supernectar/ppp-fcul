import User from '~~/server/models/User';
import Transport from '~~/server/models/Transport';
import Resource from '~~/server/models/Resource';

export default defineEventHandler(async (event) => {
  try {
    const { userId } = event.context.params;
    const user = await User.findById(userId);

    const transportIds = user.transporterData.vehicles;
    const transports = await Transport.find({ _id: transportIds }).populate({
      path: 'resources.resource',
      model: Resource
    });

    return transports;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find transports' };
  }
});
