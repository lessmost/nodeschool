var qhttp = require('q-io/http'),
    _ = require('lodash');

var getIdUrlFn = _.bind(String.prototype.concat, 'http://localhost:7001/');

qhttp.read('http://localhost:7000')
.then(_.compose(qhttp.read, getIdUrlFn))
.then(_.compose(console.log, JSON.parse))
.then(null, console.log)
.done();

