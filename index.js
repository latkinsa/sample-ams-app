var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var errorhandler = require('errorhandler');
var logger = require('morgan');

var routes = require('./routes');
var service = require('./service');

var app = express();
app.set('port', process.env.PORT || 9292);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(errorhandler()); // dev only
//app.use(app.router);

app.get('/', routes.index);
app.get('/install', routes.install);
app.get('/uninstall', routes.uninstall);
app.get('/configure', routes.configure);
app.get('/save', routes.save);

app.get('/service/', service.index);
app.get('/service/invoke', service.invoke);
app.get('/service/create', service.create);
app.get('/service/delete', service.delete);
app.get('/service/configure', service.configure);
app.get('/service/save', service.save);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
