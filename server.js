var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('/etc/letsencrypt/live/cryotify.cryocenter.us/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/cryotify.cryocenter.us/cert.pem'),

};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(8000);
