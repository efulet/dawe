const http = require('http');
const port = process.env.PORT || 1337;

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(new Date() + '\n');
}).listen(port);

console.log('Servidor corriendo en el puerto %s', port);
