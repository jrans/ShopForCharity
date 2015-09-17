'use strict';

var Hapi   = require('hapi');
var Inert  = require('inert');

var server = new Hapi.Server();

server.register(Inert, function () {});

server.connection({
	port: Number(process.env.PORT) || 9009
});

server.route(require('./routes.js'));

module.exports = server;
