import User from '~~/server/models/User';
import Transport from '~~/server/models/Transport';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  try {
    const { userId } = event.context.params;
    const user = await User.findById(userId);

    const transportIds = user.transporterData.vehicles;
    const transports = await Transport.find({ _id: transportIds });
    event.res.jsonResponse.data = {
      items: transports
    };
  } catch (err) {
    console.log(err);
    event.res.jsonResponse.error = err;
  }

  return event.res.jsonResponse;
});
