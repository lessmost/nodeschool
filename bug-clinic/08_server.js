var http = require("http");
var jstrace = require("jstrace");

var s = http.createServer(function(req, res) {
    var code, body;
    jstrace("request:start", {'url': req.url});
    if (req.url === '/prognosis' && req.method === 'GET') {
        code = 200;
        body = {"ok": true};
    } else {
        code = 404;
        body = {"error": "notfound"};
    }
    res.statusCode = code;
    res.end(JSON.stringify(body));
    jstrace("request:end", {'statusCode': code, 'body': body});
});

s.listen(9999, function () {
    console.error("up");
});