var koa = require('koa'),
    parse = require('co-body');

var app = koa();

app.use(function *(next) {
    var body,
        obj;

    if (this.path === '/' && this.req.method === 'POST') {
        body = yield parse(this);
        if (body.name !== undefined) {
            this.body = body.name.toUpperCase();
        } else {
            this.throw(400, 'no name');
        }
    } else {
        return yield next;
    }
});

app.listen(process.argv[2]);

