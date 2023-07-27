const http = require('http');
const PORT = 5000;

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end(`El servidor esta corriendo:${PORT}`);
  } else if (request.url === '/404') {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Error 404: Pagina no encontrada');
  } else {
    response.statusCode = 500;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Error desconocido: Algo salio mal en el servidor');
  }
});

server.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto: ${PORT}`);
});
