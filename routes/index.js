exports.index = function(req, res){
  console.log("Request /: ", req);
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
  res.send('{"ok":"ok"}');
};
