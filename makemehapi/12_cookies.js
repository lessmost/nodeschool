var hapi = require("hapi");

var server = new hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.state('session', {
    ttl: 10,
    encoding: 'base64json',
    domain: 'localhost',
    path: '/{path*}'
});

server.route({
    path: '/set-cookie',
    method: 'GET',
    handler: function (request, reply) {
        reply('success').state('session', {key: 'makemehapi'});
    }
});

server.route({
    path: '/check-cookie',
    method: 'GET',
    handler: function (request, reply) {
        var session = request.state.session;
        if (session) {
            reply({user: 'hapi'});
        } else {
            reply(new Error("unauthorized"));
        }
    }
});

server.start();
