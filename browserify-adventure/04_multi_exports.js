var ndjson = require('./04_ndjson.js');
var str = prompt("Input a string"),
    arr = prompt("Input an array");

console.log(ndjson.parse(str));
console.log(ndjson.stringify(arr));

