/**
 * Created by creativecode on 04.04.16.
 */
var koa = require('koa');
var app = koa();
var r = require('rethinkdb');
var connection = null;
var serve = require('koa-static');
var mount = require('koa-mount');


app.use(mount('/log', serve('/home/deploy/.pm2/logs/')));

app.use(serve('/home/deploy/joergwasmeier_lingua/'));
app.use(function *(next){
    yield next;
    if ('/' == this.path) {
        this.body = 'Try `GET /package.json`';
    }
});

app.listen(3110);