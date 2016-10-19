const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/', function (req, res) {
    // Descomentar para asignar la cookie, luego comentar para ver
    // Solo dura un minuto!!
    //res.cookie('remember', 1, { maxAge: 60 * 1000 });
    console.log("Cookies: ", req.cookies);
    res.send('Hola Cookies');
})

app.listen(8080);
