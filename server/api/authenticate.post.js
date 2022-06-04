import User from '~~/server/models/User';
import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;

	const { email, password } = await useBody(event);
	try {
		let user = await User.findOne({
			email: email
			// password: password
		});
		if (!user) {
			event.res.jsonResponse.error = {
				message: 'Invalid username or password'
			};
		} else {
			let token = jwt.sign({ id: user._id }, 'secretkey');
			event.res.jsonResponse.data = {
				items: [token]
			};
		}
	} catch (err) {
		event.res.jsonResponse.error = {
			message: err
		};
	}
	return event.res.jsonResponse;
});
