var express = require('express');
var http = require('https');
var router = express.Router();

/* GET home page. */
router.get('/*', function(req, res, next) {
  var uri = req.url;
  var host = req.query.host;
  console.log("The host is --->");
  console.log(host);

  //uri = uri.split('source=')[1];
   //  var str_esc = encodeURIComponent(uri);
    // var final_string = "/ccstore/v1/images/?source=" + str_esc;  
	 
	 console.log("The image path is --->");
	 console.log(uri);
  
  var options = {
  "method": "GET",
  "hostname": host,
  "path": uri,
  "headers": {
    "authorization": "Basic YWRtaW46YWRtaW4="
  }
};

var request = http.request(options, function (response) {
  var chunks = [];

  response.on("data", function (chunk) {
    chunks.push(chunk);
  });

  response.on("end", function () {
    var body = Buffer.concat(chunks);
    res.end(body);
  });
 
});


  request.on('error', function(err) {
    console.log("Error Found");
	console.log(err);
});

request.end();
  
});

module.exports = router;
