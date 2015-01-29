var http = require('http'),
    async = require('async');

async.reduce(['one', 'two', 'three'], 0, function (memo, item, callback) {
    var url = process.argv[2] + '?number=' + item;
    http.get(url, function (res) {
        var body = '';
        res.on('data', function (chunk) {
            body += chunk.toString();
        });
        res.on('end', function () {
            callback(null, memo + parseInt(body));
        });
        res.on('error', callback);
    })
    .on('error', callback);
}, function (err, result) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(result);
});

