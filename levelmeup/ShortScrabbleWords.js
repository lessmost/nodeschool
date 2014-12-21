
function init(db, words, callback) {
    // insert each word in the words array here
    // then call `callback()` when you're done inserting words
    var ops = words.map(function (word) {
        var l = word.length;
        return {type: 'put', key: l + word, value: word};
    });
    db.batch(ops, function (err) {
        callback(err);
    });
}

function query(db, word, callback) {
    // `word` may contains '*' chars to denote single-letter wildchards
    // the wildchards will only be on the end of a query
    // call `callback(err, results)` with an array of matching words
    var start = word.replace(/\*/g, 'A'),
        end = word.replace(/\*/g, 'z');
    var results = [];
    var error = null;
    var l = word.length;
    
    // console.log("word : %s", word);
    db.createReadStream({gte: l + start, lte: l + end})
        .on('data', function (data) {
            //if (data.value.length === word.length) {
                results.push(data.value);
            //}
        })
        .on('error', function (err) {
            error = err;
        })
        .on('end', function () {
            // console.log("results: " + results);
            callback(error, results);
        });
}

module.exports.init = init;
module.exports.query = query;