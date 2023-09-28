const http = require('http');

const server = http.createServer((request, response) => {

  console.log(request.url);

  if (request.url === '/') {
    response.write('Welcome to the server!');
    return response.end();
  }

  if (request.url === '/about') {
    response.write('acerca de...');
    return response.end();
  }

  response.write(`
  <h1>Titulo</h1>
  <p>Esta pagina no se encontro</p>
  <a href="/">Volver a pagina principal</a>
  `);
  response.end()
})

server.listen(3000)

console.log('Servidor escuchando en el puerto 3000');