var koa = require('koa');

var app = koa();

app.use(function *(next) {
    if (this.path === '/') {
        this.body = 'hello koa';
    } else if (this.path === '/500') {
        this.res.statusCode = 500;
        this.res.end('internal server error');
    } else if (this.path === '/404') {
        this.res.statusCode = 404;
        this.res.end('page not found');
    } else {
        return yield next;
    }
});

app.listen(process.argv[2]);

