exports.index = function(req, res){
  console.log("Request /: ", req);
  res.send('{"ok":"ok"}');
};

exports.status = function(req, res){
  console.log("Request /status: ", req);
  res.send('{"ok":"ok"}');
};

exports.install = function(req, res){
  console.log("Request /install: ", req);
  res.send('{"ok":"ok"}');
};

exports.uninstall = function(req, res){
  console.log("Request /uninstall: ", req);
  res.send('{"ok":"ok"}');
};

exports.configure = function(req, res){
  console.log("Request /configure: ", req);
  res.send('{"ok":"ok"}');
};

exports.save = function(req, res){
  console.log("Request /save: ", req);
  var resp = {
    "requestId": "be446dc2-8f30-4fd7-95bb-c72bacff5ebf",
    "configurationStatus": "CONFIGURED",
    "payload": {},
    "httpStatusCode": "200",
  };
  res.send(resp);
};
