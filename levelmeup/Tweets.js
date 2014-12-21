module.exports = function (db, date, callback) {
    var tweets = [],
        error = null,
        d = new Date(date);
    var begin = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    var end = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
    db.createReadStream({gte: begin.toISOString(), lt: end.toISOString()})
        .on('data', function (data) {
            tweets.push(data.value);
        })
        .on('error', function (err) {
            error = err;
        })
        .on('end', function () {
            if (callback) {
                callback(error, tweets);
            }
        });
};