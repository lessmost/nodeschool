var level = require("level"),
    dbPath = process.argv[2],
    db;
    
function getKey(idx) {
    var key = 'key' + idx;
    db.get(key, function (error, value) {
        if (!error) {
            console.log('%s=%s', key, value);
        }
        idx++;
        if (idx <= 100) {
            getKey(idx);
        }
    });
}

db = level(dbPath);
getKey(0);