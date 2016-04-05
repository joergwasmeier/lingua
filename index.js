/**
 * Created by creativecode on 04.04.16.
 */
var koa = require('koa');
var app = koa();
var r = require('rethinkdb');
var connection = null;
var serve = require('koa-static');
var mount = require('koa-mount');

r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
    if (err) throw err;
    connection = conn;

    r.db('test').table('authors').insert({test:"jeah"}).run(connection, function(err, result) {
        if (err) throw err;
    });

});

app.use(mount('/log', serve('/home/deploy/.pm2/logs/')));

app.use(serve('/home/deploy/joerg_test-project/'));
app.use(function *(next){
    yield next;
    if ('/' == this.path) {
        this.body = 'Try `GET /package.json`';
    }
})

app.listen(3100);