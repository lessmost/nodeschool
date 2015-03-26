var koa = require('koa'),
    fs = require('fs');

var app = koa();

app.use(function *(next) {
    if (this.path === '/json') {
        this.body = {
            foo: 'bar'
        };
    } else if (this.path === '/stream') {
        this.body = fs.createReadStream(process.argv[3]);
    } else {
        return yield next;
    }
});

app.listen(process.argv[2]);

