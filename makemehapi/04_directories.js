var hapi = require("hapi"),
    path = require("path");

var server = new hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/foo/bar/baz/{name}',
    method: 'GET',
    handler: {
        directory: {path: path.join(__dirname, '04_public')}
    }
});

server.start();