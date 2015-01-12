var hapi = require("hapi"),
    path = require("path");

var server = new hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/',
    method: 'GET',
    handler: {
        file: path.join(__dirname, '03_index.html')
    }
});

server.start();