import jwt from 'jsonwebtoken';
import keys from 'oauth2.keys.json';

export default defineEventHandler(async (event) => {
	const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
	const options = {
		redirect_uri: 'http://localhost:3000/auth/google',
		client_id: keys.web.client_id,
		access_type: 'offline',
		response_type: 'code',
		prompt: 'consent',
		scope: [
			'https://www.googleapis.com/auth/userinfo.profile',
			'https://www.googleapis.com/auth/userinfo.email'
		].join(' ')
	};
	return `${rootUrl}?${querystring.stringify(options)}`;
});
