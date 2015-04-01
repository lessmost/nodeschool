var koa = require('koa'),
    cookies = require('cookies');

var app = koa();
app.keys = ['secret', 'keys'];

var views = 0;

app.use(function* (next) {
    var v;
    if (this.path === '/') {
        v = this.cookies.get('view', {'signed': true});
        if (!v) {
            views = 1;
        } else {
            views = parseInt(v, 10) + 1;
        }

        this.cookies.set('view', views, {'signed': true});
        this.body = views + ' views';
    } else {
        yield next;
    }
});

app.listen(process.argv[2] || 4000);
