var multilevel = require("multilevel"),
    net = require("net");

var db = multilevel.client();
var conn = net.connect({port: 4545});

conn.pipe(db.createRpcStream()).pipe(conn);

db.get('multilevelmeup', function (err, value) {
    if (!err) {
        console.log(value);
    }
    conn.end();
});