module.exports = scenario;
var replify = require("replify");
var replpad = require("replpad");

function scenario(callback) {
    var createServer = require("http").createServer;

    var server = createServer(function(req, res) {
        res.end("bug-clinic");
    });
    var repl = replify({
        name: "bug-clinic",
        start: replpad
    }, {
        'server': server,
        '__message': 'REPLs are neat'
    });

    server.listen(8080, function () {
        callback(server, repl);
    });
}

// scenario(function () {
//     console.log("up");
// });