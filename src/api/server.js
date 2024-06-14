const Hapi = require("@hapi/hapi");
const routes = require("../routes");
const inert = require("@hapi/inert");

const server = Hapi.server({
	port: process.env.PORT || 3000,
	host: "0.0.0.0",
	routes: {
		cors: {
			origin: ["*"],
		},
	},
});

const init = async () => {
	await server.register(inert);

	server.route(routes);

	await server.initialize();

	server.start().then(() => {
		console.log(`Server berjalan pada ${server.info.uri}`);
	});
};

init();

module.exports = server.listener;
