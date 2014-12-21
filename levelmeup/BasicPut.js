var level = require("level"),
    dbPath = process.argv[2],
    str = process.argv[3],
    obj,
    db;
    
db = level(dbPath);
obj = JSON.parse(str);

var keys = obj.keys();
var cnt = 0;
var onPut = function onPut(err) {
    if (err) {
        throw err;
    }
    cnt++;
    if (cnt >= keys.length) {
        db.close();
    }
};
keys.forEach(function (key) {
    db.put(key, obj[key], onPut);
});