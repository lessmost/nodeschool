var math = require('./math');
var seneca = require('seneca')();

seneca.use(math, {});

seneca.act({
    role: 'math',
    cmd: 'sum',
    left: process.argv[3],
    right: process.argv[4]
}, function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

seneca.act({
    role: 'math',
    cmd: 'sum',
    integer: true,
    left: process.argv[3],
    right: process.argv[4]
}, function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

module.exports = seneca;

