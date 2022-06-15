export default defineEventHandler(async (event) => {
  // https://google.github.io/styleguide/jsoncstyleguide.xml
  event.res.jsonResponse = {
    apiVersion: '1.0.0',
    context: undefined,
    id: undefined,
    method: event.req.method,
    requestUrl: event.req.url,
    params: useQuery(event)
    // data: {
    // 	kind: '',
    // 	fields: '',
    // 	etag: '',
    // 	id: '',
    // 	lang: '',
    // 	updated: '', //  date formatted RFC 3339
    // 	deleted: '',
    // 	currentItemCount: '',
    // 	itemsPerPage: '',
    // 	startIndex: '',
    // 	totalItems: '',
    // 	pageIndex: '',
    // 	totalPages: '',
    // 	pageLinkTemplate: '',
    // 	next: '',
    // 	nextLink: '',
    // 	previous: '',
    // 	previousLink: '',
    // 	self: '',
    // 	selfLink: '',
    // 	edit: '',
    // 	editLink: '',
    // 	items: [{}]
    // },
    // error: {
    // 	code: '',
    // 	message: '',
    // 	errors: [
    // 		{
    // 			domain: '',
    // 			reason: '',
    // 			message: '',
    // 			location: '',
    // 			locationType: '',
    // 			extendedHelp: '',
    // 			sendReport: ''
    // 		}
    // 	]
    // }
  };
});
