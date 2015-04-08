var fs = require('fs');

function run (generator) {
    var it = generator(go);

    function go (err, results) {
        if (err) {
            return it.throw(err);
        }
        it.next(results);
    }

    go();
}

var f1 = function* (done) {
    var exercises = yield fs.readdir('.', done);
    console.log(exercises);
};

var f2 = function* (done) {
    var exercises, firstFile;
    try {
        exercises = yield fs.readdir('NoNoNo', done);
        firstFile = exercises[0]; // TypeError: Cannot read property '0' of undefined
    } catch (e) {
        firstFile = null;
    }

    console.log(firstFile);
};

//run(f1);
run(f2);

