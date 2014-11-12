var http = require("http"),
    url = require("url"),
    server;
    
server = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true),
        resObj = {},
        t;
    if (!urlObj.query || !urlObj.query.iso) {
        res.end("Invalid request");
        return;
    }
    t = new Date(urlObj.query.iso);
    switch (urlObj.pathname) {
        case '/api/parsetime':
            resObj.hour = t.getHours();
            resObj.minute = t.getMinutes();
            resObj.second = t.getSeconds();
            break;
        case '/api/unixtime':
            resObj.unixtime = t.getTime();
            break;
        default:
            res.end("Invalid request.");
            return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(resObj));
});
server.listen(Number(process.argv[2]));