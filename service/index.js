exports.index = function(req, res){
  console.log("Request /service/: ", req);
  res.send('{"ok":"ok"}');
};

exports.invoke = function(req, res){
  console.log("Request /service/invoke: ", req);
  res.send('{"ok":"ok"}');
};

exports.create = function(req, res){
  console.log("Request /service/create: ", req);
  res.send('{"ok":"ok"}');
};

exports.delete = function(req, res){
  console.log("Request /service/delete: ", req);
  res.send('{"ok":"ok"}');
};

exports.configure = function(req, res){
  console.log("Request /service/configure: ", req);
  res.send('{"ok":"ok"}');
};

exports.save = function(req, res){
  console.log("Request /service/save: ", req);
  res.send('{"ok":"ok"}');
};
