var hapi = require("hapi");

var server = new hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/proxy',
    method: ['GET', 'POST'],
    handler: {
        proxy: {
            host: '127.0.0.1',
            port: '65535'
        }
    }
});

server.start();