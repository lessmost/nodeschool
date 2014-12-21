var fs = require("fs"),
    level = require("level");
    
var dbPath = process.argv[2],
    filePath = process.argv[3],
    db = level(dbPath);
    
db.on('ready', function () {
    var data = fs.readFileSync(filePath);
    var lines = data.toString().split('\n');
    var dbBatch = db.batch();
    lines.forEach(function (line) {
        var tokens = line.split(',');
        switch (tokens[0]) {
            case 'put':
                dbBatch = dbBatch.put(tokens[1], tokens[2]);
                break;
            case 'del':
                dbBatch = dbBatch.del(tokens[1]);
                break;
            default:
                throw Error("Invalid operations");
        }
    });
    dbBatch.write(function (err) {
        if (err) {
            throw err;
        }
    });
});