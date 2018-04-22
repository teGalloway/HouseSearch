var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'}, {'Content-Type':'image/jpeg'});
    res.write(data);
    res.end();
    });
}).listen(8080);
