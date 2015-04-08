function askFoo() {
    return new Promise(function (resolve, reject) {
        resolve('foo');
        //reject('bar');
    });
}

function run(generator) {
    // your code goes here
    var it = generator();
    var p = it.next().value;
    //console.log(p);
    p
    .then(function (results) {
        it.next(results);
    })
    .catch(function (e) {
        it.throw(e);
    });
}

run(function* () {
    // improve: errors?
    try {
    var foo = yield askFoo();
    console.log(foo);
    } catch (e) {
        console.log(e);
    }
});
