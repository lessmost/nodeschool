var level = require("level"),
    dbPath = process.argv[2],
    key = process.argv[3],
    db;
    
db = level(dbPath);
db.get(key, function (error, value) {
    console.log(value);
})