var math = require('./math');
var seneca = require('seneca')();

seneca.use(math, {});

seneca.listen(process.argv[2], '127.0.0.1');

// module.exports = seneca;
