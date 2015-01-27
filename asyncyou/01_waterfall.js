var fs = require('fs'),
    http = require('http'),
    async = require('async');

async.waterfall([
    function (cb) {
        fs.readFile(process.argv[2], cb);
    },

    function (data, cb) {
        var body = '';
        http.get(data.toString(), function (res) {
            res.on('data', function (chunk) {
                body += chunk.toString();
            });
            res.on('end', function (){
                cb(null, body);
            });
            res.on('error', function (err) {
                cb(err);
            });
        });
    }
], function (err, result) {
    if (err) {
        console.error(err);
    }
    console.log(result);
});

