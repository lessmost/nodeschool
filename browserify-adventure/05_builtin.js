var url = require("url"),
    querystring = require("querystring");

var str = prompt("Input an url");

var query = url.parse(str).query;
console.log(url.resolve(str, querystring.parse(query).file));
