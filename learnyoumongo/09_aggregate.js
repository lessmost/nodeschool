var client = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';


client.connect(url, function(err, db) {
    var col;
    if (err) {
        console.error(err);
        return;
    }
    col = db.collection('prices');
    col.aggregate([{
        $match: {
            size: process.argv[2]
        }
    }, {
        $group: {
            _id: 'avg',
            avg: {
                $avg: '$price'
            }
        }
    }]).toArray(function(err, result) {
        if (err) {
            console.error(err);
            db.close();
            return;
        }
        console.log(result[0].avg.toFixed(2));
        db.close();
    });
});
