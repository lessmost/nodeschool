var hapi = require("hapi"),
    joi = require("joi");

var server = new hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/chickens/{breed}',
    method: 'GET',
    handler: function getHandler(request, reply) {
        reply('Hello ' + request.params.breed);
    },
    config: {
        validate: {
            params: {
                breed: joi.string().required()
            }
        }
    }
});

server.start();