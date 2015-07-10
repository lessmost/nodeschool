var client = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var firstName = process.argv[2];
var lastName = process.argv[3];


client.connect(url, function(err, db) {
    var col;
    if (err) {
        console.error(err);
        return;
    }
    col = db.collection('docs');
    col.insert([{
        firstName: firstName,
        lastName: lastName
    }], function(err, result) {
        var doc;
        if (err) {
            console.error(err);
            db.close();
            return;
        }
        doc = result.ops[0];
        console.log(JSON.stringify(doc));
        db.close();
    });
});
