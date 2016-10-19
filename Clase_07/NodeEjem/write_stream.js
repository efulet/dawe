const fs = require("fs");
const writableStreamEvent = fs.createWriteStream('salida.txt');

writableStreamEvent.on('finish', function () {
    console.log('Se ha escrito el archivo');
});

writableStreamEvent.write('Hola Node.js!\n');
writableStreamEvent.end();
