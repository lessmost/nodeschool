var koa = require('koa'),
    session = require('koa-session');

var app = koa();
app.keys = ['secret', 'keys'];

app.use(session(app));

app.use(function* (next) {
    var n = 0;
    if (this.path === '/') {
        n = this.session.views || 0;
        this.session.views = ++n;
        this.body = n + ' views';
    }
});

app.listen(process.argv[2] || 4000);
