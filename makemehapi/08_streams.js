var hapi = require("hapi"),
    path = require("path"),
    fs = require("fs"),
    rot13 = require("rot13-transform");

var server = new hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/',
    method: 'GET',
    handler: function getHandler(request, reply) {
        var s = fs.createReadStream(path.join(__dirname, '08_file.txt'));
        reply(s.pipe(rot13()));
    }
});

server.start();