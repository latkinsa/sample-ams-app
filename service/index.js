exports.index = function(req, res){
  console.log("Request /service/: ", req);
  res.send('{"ok":"ok"}');
};

exports.status = function(req, res){
  console.log("Request /service/status: ", req);
  res.send('{"ok":"ok"}');
};

exports.invoke = function(req, res){
  console.log("Request /service/invoke: ", req);
  res.send('{"invocationId": "bb876080-7655-4d17-bfbd-80350ace9ce4","instanceId": "6ea036bb-8cfb-46c5-a826-d001d3a0349b" }');
};

exports.create = function(req, res){
  console.log("Request /service/create: ", req);
  var resp = {
    inputParameters: [
      {name: "media_account_id", dataType: "Text", width: 40},
      {name: "custom_audience_id", dataType: "Text", width: 40},
      {name: "action", dataType: "Text", width: 40},
    ],
    outputParameters: [
      {name: "media_account_id", dataType: "Text", width: 40},
      {name: "custom_audience_id", dataType: "Text", width: 40},
      {name: "action", dataType: "Text", width: 40},
    ]
  };
  res.send(resp);
};

exports.delete = function(req, res){
  console.log("Request /service/delete: ", req);
  res.send('{"ok":"ok"}');
};

exports.configure = function(req, res){
  console.log("Request /service/configure: ", req);
  var resp = {
    "requestId": "be446dc2-8f30-4fd7-95bb-c72bacff5ebf",
    "configurationStatus": "CONFIGURED",
    "payload": {},
    "httpStatusCode": "200",
  };
  res.send(resp);
};

exports.save = function(req, res){
  console.log("Request /service/save: ", req);
  res.send('{"ok":"ok"}');
};
