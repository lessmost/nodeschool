var http = require('http'),
    async = require('async');

async.map([process.argv[2], process.argv[3]], function (url, done) {
    var body = '';
    http.get(url, function (res) {
        res.on('data', function (chunk) {
            body += chunk.toString();
        });
        res.on('end', function () {
            done(null, body);
        });
        res.on('error', function (err) {
            done(err);
        });
    })
    .on('error', function (err) {
        done(err);
    });
}, function (err, results) {
    if (err) {
        console.log(err);
    }
    console.log(results);
});

