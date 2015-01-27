var qhttp = require('q-io/http');

qhttp.read('http://localhost:1337')
.then(function (res) {
    console.log(JSON.parse(res));
})
.then(null, console.log)
.done();

