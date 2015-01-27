var qhttp = require('q-io/http');

qhttp.read('http://localhost:7000')
.then(function (res) {
    var id = res.toString();
    return qhttp.read('http://localhost:7001/' + id);
})
.then(function (res) {
    console.log(JSON.parse(res.toString()));
})
.then(null, console.log)
.done();

