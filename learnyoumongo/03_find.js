var client = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';


client.connect(url, function (err, db) {
    var col;
    if (err) {
        console.error(err);
        return;
    }
    col = db.collection('parrots');

    col.find({
        age: {$gt: parseInt(process.argv[2], 10)}
    }).toArray(function (err, documents) {
        if (err) {
            console.error(err);
            db.close();
            return;
        }
        console.log(documents);
        db.close();
    });
});
