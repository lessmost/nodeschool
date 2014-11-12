var http = require("http"),
    through = require("through"),
    server;
    
server = http.createServer(function (req, res) {
    req.pipe(through(function (buf) {
        this.queue(buf.toString().toUpperCase());
    })).pipe(res);
});
server.listen(Number(process.argv[2]));