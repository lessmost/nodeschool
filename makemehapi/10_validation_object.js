var hapi = require("hapi"),
    joi = require("joi");

var server = new hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/login',
    method: 'POST',
    handler: function getHandler(request, reply) {
        reply('login successful');
    },
    config: {
        validate: {
            payload: joi.object({
                isGuest: joi.boolean().required(),
                username: joi.string().when('isGuest', { is: false, then: joi.required() }),
                accessToken: joi.string().alphanum(),
                password: joi.string().alphanum()
            })
            .options({allowUnknown: true})
            .without('password', 'accessToken')
        }
    }
});

server.start();