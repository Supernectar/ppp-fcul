import Transport from '~~/server/utils/models/Transport';

export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;

	const transports = await Transport.find();

	event.res.jsonResponse.data = {
		items: transports
	};
	return event.res.jsonResponse;
});
