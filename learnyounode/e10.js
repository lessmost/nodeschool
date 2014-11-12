var net = require("net"),
    strftime = require("strftime"),
    server;

server = net.createServer(function (socket) {
    var str = strftime("%Y-%m-%d %H:%M", new Date());
    socket.end(str);
});

server.listen(Number(process.argv[2]));