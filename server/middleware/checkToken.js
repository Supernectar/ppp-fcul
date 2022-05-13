import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
	//Middleware executed for server routes only
	if (event.req.url.split('/')[1] === 'api') {
		return event.res.jsonResponse;
		const unprotectedRoutes = [
			'/api/authenticate',
			'/api/users',
			'/api/items',
			'/api/items',
			'/api/products'
		];
		if (!unprotectedRoutes.includes(event.req.url.split('?')[0])) {
			const authHeader = event.req.headers['authorization'];
			const token = authHeader && authHeader.split(' ')[1];
			if (!token) {
				event.res.jsonResponse.error = {
					message: 'This is a protected route, access token is required'
				};
				return event.res.jsonResponse;
			} else {
				try {
					const tokenData = await jwt.verify(
						token,
						'secretkey'
					);

					// Adds userId to req (accessible from the next middlewares)
					event.req.userId = tokenData.id;
				} catch (err) {
					event.res.jsonResponse.error = {
						message: err.message
					};
					return event.res.jsonResponse;
				}
			}
		}
	}
});
