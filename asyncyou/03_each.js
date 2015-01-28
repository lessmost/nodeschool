var http = require('http'),
    async = require('async');

async.each([process.argv[2], process.argv[3]], function (url, done) {
    var body = '';
    http.get(url, function (res) {
        res.on('data', function (chunk) {
            body += chunk.toString();
        });
        res.on('end', function () {
            done();
        });
        res.on('error', function (err) {
            done(err);
        });
    })
    .on('error', function (err) {
        done(err);
    });
}, function (err) {
    if (err) {
        console.log(err);
    }
});

