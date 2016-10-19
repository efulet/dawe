const express = require('express');
const app = express();

// Debe existir esta carpeta en el directorio
//app.use(express.static('public'));

app.get('/index_get.html', function (req, res) {
   res.sendFile(__dirname + "/" + "index_get.html");
});

app.get('/process_get', function (req, res) {
   // Salida en formato JSON
   respuesta = {
      nombre: req.query.nombre,
      apellido: req.query.apellido
   };
   console.log(respuesta);
   res.end(JSON.stringify(respuesta));
});

const server = app.listen(8080, function () {
    const host = server.address().address
    const port = server.address().port

    console.log("Ejemplo de aplicacion en http://%s:%s", host, port)
});