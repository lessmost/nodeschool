var http = require("http"),
    through2Map = require("through2-map"),
    server;
    
server = http.createServer(function (req, res) {
    req.pipe(through2Map( function (chunk) {
       return chunk.toString().toUpperCase(); 
    })).pipe(res);
});

server.listen(Number(process.argv[2]));