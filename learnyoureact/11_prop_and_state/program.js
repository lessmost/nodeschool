var React = require("react");
var DOM = React.DOM;
var body = DOM.body;
var div = DOM.div;
var script = DOM.script;
var browserify = require("browserify");

var express = require("express");
var app = express();

app.set('port', (process.argv[2] || process.env.PORT));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine());

var data = [
    {
        title: "Shopping",
        detail: process.argv[3] || 'Milk'
    },
    {
        title: "Hair cut",
        detail: process.argv[4] || '13:00'
    }
    ];
    
require("node-jsx").install();
var TodoBox = require("./views/index.jsx");

app.use('/bundle.js', function (req, res) {
    res.setHeader('content-type', 'application/javascript');
    browserify('./app.js', {debug: true})
        .transform('reactify')
        .bundle()
        .pipe(res);
});

app.use('/', function(req, res) {
    var initialData = JSON.stringify(data);
    var markup = React.renderToString(React.createElement(TodoBox, {data: data}));
    
    res.setHeader('content-type', 'text-html');
    
    var html = React.renderToStaticMarkup(body(
            null,
            div({
                id: 'app',
                dangerouslySetInnerHTML: {__html: markup}
            }),
            script({
                id: 'initial-data',
                type: 'text/plain',
                'data-json': initialData
            }),
            script({
                src: '/bundle.js'
            })
        ));
        
    res.end(html);
});
    
app.listen(app.get('port'), function() {});
