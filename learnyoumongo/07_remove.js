var client = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var name = process.argv[2];
var id = +process.argv[3];


client.connect(url, function(err, db) {
    var col;
    if (err) {
        console.error(err);
        return;
    }
    col = db.collection(name);
    col.remove({
        _id: id
    }, function(err, result) {
        if (!err) { 
            console.log(result.result.n);
        }
        db.close();
    });
});
