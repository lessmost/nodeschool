var koa = require('koa');

var app = koa();

app.use(function *(next){
    if (this.request.is('json')) {
        this.response.type = 'json';
        this.body = {message: 'hi!'};
    } else {
        this.response.type = 'text';
        this.body = 'ok';
    }

    return yield next;
});

app.listen(process.argv[2]);

