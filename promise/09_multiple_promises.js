var q = require('q');

var p1 = q.defer(),
    p2 = q.defer();

function all(p1, p2) {
    var p = q.defer();
    var cnt = 0;
    var arr = [null, null];

    p1.then(function (args) {
        cnt++;
        arr[0] = args;
        if (cnt === 2) {
            p.resolve(arr);
        }
    }, function (err) {
        p.reject(err);
    });
    p2.then(function (args) {
        cnt++;
        arr[1] = args;
        if (cnt === 2) {
            p.resolve(arr);
        }
    }, function (err) {
        p.reject(err);
    });

    return p.promise;
}

all(p1.promise, p2.promise)
.then(console.log);

setTimeout(function () {
    p1.resolve('PROMISES');
    p2.resolve('FTW');
}, 200);

