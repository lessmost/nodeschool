var express = require("express"),
    fs = require("fs");

var app = express();

app.get('/books', function (req, res) {
    fs.readFile(process.argv[3], function (err, data) {
        var obj;
        if (err) {
            res.statusCode(500).send();
        } else  {
            try {
                obj = JSON.parse(data);
                res.json(obj);
            } catch (e) {
                res.statusCode(500).send();
            }
        }
    });
});

app.listen(process.argv[2]);