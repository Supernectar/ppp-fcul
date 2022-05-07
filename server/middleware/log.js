export default defineEventHandler((event) => {
	// Nota: os middlewares sao executados pela ordem em que estao colocados
	// nesta pasta, de baixo para cima. Porque? I guess we'll never know...
	// console.log('New request: ' + event.req.url);
});
