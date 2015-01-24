var q = require('q');

var defer = q.defer();
defer.promise.then(function (args) {
    console.log(args);
});

setTimeout(function() { defer.resolve('RESOLVED!') }, 300);

