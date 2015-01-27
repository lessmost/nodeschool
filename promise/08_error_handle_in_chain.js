var q = require('q');

function throwMyGod () {
    throw new Error('OH NOES');
}

function iterate (args) {
    console.log(args);
    return args + 1;
}

q.fcall(iterate, 1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(throwMyGod)
.then(iterate, console.log)
.done();

