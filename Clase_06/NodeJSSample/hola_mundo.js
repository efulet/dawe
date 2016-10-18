const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola NodeJS!, estamos trabajando en el curso de Desarrollo de Aplicaciones Web Empresariales\n');
}).listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});
