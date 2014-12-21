var level = require("level"),
    db = level(process.argv[2], {valueEncoding: 'json'}),
    data = require(process.argv[3]);
    
data.map(function (row) {
    var key = null;
    if (row.type === 'user') {
        key = row.name;
    } else if (row.type === 'repo') {
        key = row.user + '!' + row.name;
    }
    if (key) {
        db.put(key, row);
    }
});
    