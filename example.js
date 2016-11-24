var http = require('http');
var port = parseInt(process.env.PORT,10);
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello there!!\n');
}).listen(port, '0.0.0.0');
console.log('Server listening at http://0.0.0.0:' + port.toString() + '/');
