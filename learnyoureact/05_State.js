var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/', function(req, res) {
    res.render('state', '');
});

app.listen(app.get('port'), function() {});