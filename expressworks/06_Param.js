var express = require("express"),
    crypto = require("crypto");
    
var app = express();
app.use(require("body-parser").urlencoded({extended: false}));

app.put('/message/:id', function (req, res) {
    var id = req.params.id;
    res.statusCode = 200;
    res.set('Content-Type', 'text/plain');
    
    //res.write(JSON.stringify(req.body));
    res.write(crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex'));
    res.end('\n');
});

app.listen(process.argv[2]);