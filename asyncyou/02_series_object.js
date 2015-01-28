var async = require('async'),
    http = require('http');

async.series({
    requestOne: function (done) {
        var body = '';
        http.get(process.argv[2], function (res) {
            res.on('data', function (chunk) {
                body += chunk.toString();
            });
            res.on('end', function () {
                done(null, body);
            });
            res.on('error', function (err) {
                done(err);
            });
        });
    },

    requestTwo: function (done) {
        var body = '';
        http.get(process.argv[3], function (res) {
            res.on('data', function (chunk) {
                body += chunk.toString();
            });
            res.on('end', function () {
                done(null, body);
            });
            res.on('error', function (err) {
                done(err);
            });
        });
    }
}, function (err, results) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(results);
});

