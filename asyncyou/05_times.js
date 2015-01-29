var http = require('http'),
    async = require('async');

var url = process.argv[2] + ':' + process.argv[3] + '/users/create';

function createUsers(callback) {
    async.times(5, function (n, done) {
        var req = http.request({
            host: process.argv[2],
            port: process.argv[3],
            path: '/users/create',
            method: 'POST'
        }, function (res) {
            var body = '';
            res.on('end', function () {
                done(null, body);
            });
            res.on('error', function (err) {
                done(err);
            });
            res.on('data', function (chunk) {
                body += chunk.toString();
            });
        });
        req.write(JSON.stringify({
            user_id: n + 1
        }));
        req.end();
    }, callback);
}

function getUsers(callback) {
    http.get({
        host: process.argv[2],
        port: process.argv[3],
        path: '/users'
    }, function (res) {
        var body = '';
        res.on('data', function (chunk) {
            body += chunk.toString();
        });
        res.on('end', function () {
            callback(null, body);
        });
        res.on('error', function(err) {
            callback(err);
        });
    });
}

async.series([createUsers, getUsers], function (err, results) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(results[1]);
});

