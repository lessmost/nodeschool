module.exports = function (db, date, callback) {
    var cnt = 0,
        error = null;
    db.createReadStream({gte: new Date(date).toISOString()})
        .on('data', function (data) {
            cnt++;
        })
        .on('error', function (err) {
            error = err;
        })
        .on('end', function () {
            if (callback) {
                callback(error, cnt);
            }
        });
};