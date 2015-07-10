var client = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';


client.connect(url, function(err, db) {
    var col;
    if (err) {
        console.error(err);
        return;
    }
    col = db.collection('users');
    col.update({
        name: 'Tina'
    }, {
        $set: {
            age: 40
        }
    }, function(err, result) {
        if (!err) { 
            console.log(result.result.n);
        }
        db.close();
    });
});
