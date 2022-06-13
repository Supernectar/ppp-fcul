import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
	// Middleware executed for server routes only
	const url = event.req.url;

	if (url[1] === 'api') {
		// const unprotectedRoutes = ["/api/authenticate", "/api/users", "/api/items"];
		// // console.log(event.req.url.split("/")[1]);
		// // console.log(event.req.url.split("/")[2]);
		// // console.log(event.req.url.split("/")[3]);
		// console.log(event.req.url);
		// if (url[2] === "products") {
		//   unprotectedRoutes.append("/api/products/" + url[3]);
		// }
		// if (!unprotectedRoutes.includes(event.req.url.split("?")[0])) {
		//   const authHeader = event.req.headers["authorization"];
		//   const token = authHeader && authHeader.split(" ")[1];
		//   if (!token) {
		//     event.res.jsonResponse.error = {
		//       message: "This is a protected route, access token is required",
		//     };
		//     return event.res.jsonResponse;
		//   } else {
		//     try {
		//       const tokenData = await jwt.verify(token, "secretkey");
		//       // Adds userId to req (accessible from the next middlewares)
		//       event.req.userId = tokenData.id;
		//     } catch (err) {
		//       event.res.jsonResponse.error = {
		//         message: err.message,
		//       };
		//       return event.res.jsonResponse;
		//     }
		//   }
		// }
	}
});
