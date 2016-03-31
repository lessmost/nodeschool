var seneca = require('./math');

seneca.act({
    role: 'math',
    cmd: 'sum',
    left: parseFloat(process.argv[3]),
    right: parseFloat(process.argv[4])
}, function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

module.exports = seneca;

