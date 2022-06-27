import User from '~~/server/models/User';
import Transport from '~~/server/models/Transport';

export default defineEventHandler(async (event) => {
  const { userId } = event.context.params;
  const user = await User.findOne({ _id: userId });

  try {
    const transportsIds = user.transporterData.vehicles;
    const transports = await Transport.find({ _id: transportsIds });

    return transports;
  } catch (err) {
    return { error: 'Could not retrieve transport' };
  }
});
