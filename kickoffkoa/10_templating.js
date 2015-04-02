var koa = require('koa'),
    views = require('co-views');

var app = koa();
var render = views(__dirname + '/views', {
    ext: 'ejs'
});

var user = {
    name: {
        first: 'Tobi',
        last: 'Holowaychuk'
    },
    species: 'ferret',
    age: 3
};

app.use(function* () {
    this.body = yield render('user', {user: user});
});

app.listen(process.argv[2] || 4000);
