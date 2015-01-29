var http = require('http'),
    async = require('async');

var body = '',
    cnt = 0;
async.whilst(function test() {
    return body.trim().indexOf('meerkat') < 0;
}, function fn(callback) {
    body = '';
    cnt++;
    http.get(process.argv[2], function (res) {
        res.on('data', function (chunk) {
            body += chunk.toString();
        });
        res.on('end', function () {
            callback();
        });
        res.on('error', callback);
    });
}, function callback(err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(cnt);
});

