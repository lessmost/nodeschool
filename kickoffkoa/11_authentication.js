var koa = require('koa'),
    parse = require('co-body'),
    session = require('koa-session');

var form = '<form action="/login" method="POST">\
    <input name="username" type="text" value="username">\
    <input name="password" type="password" placeholder="The password is \'password\'">\
    <button type="submit">submit</button>\
    </form>';

var app = koa();

// use koa-session somewhere at the top of app
// we need to set the `.keys` for singed cookies and the cookie-session module
app.keys = ['secret1', 'secret2', 'secret3'];
app.use(session(app));

/**
 * If `this.session.authenticated` exist, user will see 'hello world'
 * otherwise, people will get a `401` error because they aren't logged in
 */
app.use(function* home(next) {
    if (this.request.path !== '/') {
        return yield next;
    }
    if (this.session.authenticated) {
        this.body = 'hello world';
    } else {
        this.status = 401;
    }
});

/**
 * If successful, the logged in user should be redirected to `/`.
 * hint: use `this.redirect`
 */
app.use(function* login(next){
    var body;
    if (this.request.path !== '/login') {
        return yield next;
    }
    if (this.request.method === 'GET') {
        this.body = form;
    }
    if (this.request.method == 'POST') {
        body = yield parse(this);
        if (body.username === 'username' && body.password === 'password') {
            // logged in
            this.session.authenticated = true;
            this.redirect('/');
        } else {
            this.status = 400;
        }
    }
});

/**
 * Let's redirect to `/login` after every response.
 * If a user hits `/logout` when they already logged out,
 * let's not consider that an error and return a 'success'
 */
app.use(function* logout(next) {
    if (this.request.path !== '/logout') {
        return yield next;
    }
    this.session.authenticated = false;
    this.redirect('/login');
});

app.listen(process.argv[2] || 4000);


