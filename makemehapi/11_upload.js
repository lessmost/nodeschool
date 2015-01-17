var hapi = require("hapi");

var server = new hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

// route config to handle multipart/form-data file upload
// use curl -F "description=mydescription" -F "file=@11_data.txt" localhost:8080/upload to test

server.route({
    path: '/upload',
    method: 'POST',
    config: {
        payload: {
            output: 'stream', // incoming payload is made avaiable via readable stream
            parse: true // file stream from multipart form-data will also have a property hapi containing filename and headers properties
        }
    },
    handler: function getHandler(request, reply) {
        var file = request.payload.file,
            body = '';
        file.on('data', function (data) {
            body += data;
        });
        file.on('end', function () {
            reply({
                description: request.payload.description,
                file: {
                    data: body,
                    filename: file.hapi.filename,
                    headers: file.hapi.headers
                }
            });
        });
    }
});

server.start();