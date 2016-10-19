const express = require('express');
const app = express();

// Response a una solicitud GET para la pagina principal
app.get('/', function (req, res) {
   console.log("Obtuvo un GET para la pagina principal");
   res.send('Hola GET');
})

// Response a una solicitud POST para la pagina principal
app.post('/', function (req, res) {
   console.log("Obtuvo un POST para la pagina principal");
   res.send('Hola POST');
})

// Responde a una solicitud DELETE para la pagina /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Obtvo un DELETE para la pagina /del_user");
   res.send('Hola DELETE');
})

// Responde a una solicitud GET request para la pagina /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Obtuvo un GET para la pagina /list_user");
   res.send('Listar usuarios');
})

// Responde a una solicitud GET para abcd, abxcd, ab123cd, etc.
app.get('/ab*cd', function(req, res) {   
   console.log("Obtuvo un GET para el patron /ab*cd");
   res.send('Pagina coincidio con el patron');
})

const server = app.listen(8080, function () {
   const host = server.address().address
   const port = server.address().port

   console.log("Ejemplo de aplicacion en http://%s:%s", host, port)
});
