var koa = require('koa');

var app = koa();

app.use(responseTime());
app.use(upperCase());

app.use(function* () {
    this.body = 'hello koa';
});

function responseTime() {
    return function* (next) {
        var start, end;

        // record start time
        start = new Date();

        yield next;

        // set X-Response-Time head
        end = new Date();
        this.set('X-Response-Time', end - start);
    };
}

function upperCase() {
    return function* (next) {
        // do nothing;
        yield next;

        if (this.body) {
            this.body = this.body.toString().toUpperCase();
        }
    };
}

app.listen(process.argv[2] || 8080);

