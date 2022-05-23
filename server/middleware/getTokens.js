import keys from 'oauth2.keys.json';

export default defineEventHandler(async (event) => {
	const url = 'https://oauth2.googleapis.com/token';
	const values = {
		code,
		client_id: keys.web.client_id,
		client_secret: keys.web.client_secret,
		redirect_uri: 'http://localhost:3000/auth/google',
		grant_type: 'authorization_code'
	};

	return axios
		.post(url, querystring.stringify(values), {
			headers: {
				'Content-Type':
					'application/x-www-form-urlencoded'
			}
		})
		.then((res) => res.data)
		.catch((error) => {
			console.error(`Failed to fetch auth tokens`);
			throw new Error(error.message);
		});
});
