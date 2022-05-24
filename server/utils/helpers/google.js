import keys from './oauth2.keys.json';
import querystring from 'querystring';
import axios from 'axios';

export function getGoogleAuthURL(req, res) {
	const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
	const options =
		'?redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fgoogle&client_id=' +
		keys.web.client_id +
		'&access_type=offline&response_type=code&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email';
	return `${rootUrl}` + options;
}
