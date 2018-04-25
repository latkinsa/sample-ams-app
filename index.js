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
app.get('/status', routes.status);
app.post('/install', routes.install);
app.post('/uninstall', routes.uninstall);
app.post('/configure', routes.configure);
app.post('/save', routes.save);

app.get('/service/', service.index);
app.get('/service/status', service.status);
app.post('/service/invoke', service.invoke);
app.post('/service/create', service.create);
app.post('/service/delete', service.delete);
app.post('/service/configure', service.configure);
app.post('/service/save', service.save);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
