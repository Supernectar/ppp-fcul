import User from '~~/server/models/User';
import Transport from '~~/server/models/Transport';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;

  try {
    const { userId } = event.context.params;
    const user = await User.findOne({ _id: userId });
    const transportsIds = user.transporterData.vehicles;
    const transports = await Transport.find({ _id: transportsIds });

    event.res.jsonResponse.data = {
      user: transports
    };
  } catch (err) {
    event.res.jsonResponse.error = err;
  }

  return event.res.jsonResponse;
});
