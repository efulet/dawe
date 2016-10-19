const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Debe existir esta carpeta en el directorio
//app.use(express.static('public'));

app.get('/index_post.html', function (req, res) {
   res.sendFile(__dirname + "/" + "index_post.html");
});

app.post('/process_post', urlencodedParser, function (req, res) {
   // Salida en formato JSON
   respuesta = {
      nombre: req.body.nombre,
      apellido: req.body.apellido
   };
   console.log(respuesta);
   res.end(JSON.stringify(respuesta));
});

const server = app.listen(8080, function () {
    const host = server.address().address
    const port = server.address().port

    console.log("Ejemplo de aplicacion en http://%s:%s", host, port)
});
