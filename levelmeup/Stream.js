var level = require("level"),
    dbPath = process.argv[2],
    db;
    
db = level(dbPath);
db.createReadStream().on('data', function (data) {
    console.log('%s=%s', data.key, data.value);
});
//db.close();