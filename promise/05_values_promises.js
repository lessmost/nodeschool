var q = require('q');

var defer = q.defer();

function attachTitle(args) {
    return 'DR. ' + args;
}

defer.promise
    .then(attachTitle)
    .then(console.log);

defer.resolve('MANHATTAN');

