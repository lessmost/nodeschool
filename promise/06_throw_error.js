var q= require('q');

function parsePromise () {
    var defer = q.defer();
    try {
        var obj = JSON.parse(process.argv[2]);
        defer.resolve(obj);
    } catch (e) {
        defer.reject(e);
    }

    return defer.promise;
}

parsePromise()
.then(parsePromise)
.then(null, console.log);

