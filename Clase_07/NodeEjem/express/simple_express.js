const express = require('express');
const app = express();

// Debe existir esta carpeta en el directorio
//app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hola Express');
})

const server = app.listen(8080, function () {
    const host = server.address().address
    const port = server.address().port

    console.log("Ejemplo de aplicacion en http://%s:%s", host, port)
});
