const crypto = require('crypto');
const fs = require('fs');
const zlib = require('zlib');

const password = new Buffer(process.env.PASS || 'password');
const encryptStream = crypto.createCipher('aes-256-cbc', password);
const gzip = zlib.createGzip();

const readStream = fs.createReadStream('small.txt');
const writeStream = fs.createWriteStream('encriptado.gz');

readStream // Lee el archivo
    .pipe(encryptStream) // encripta
    .pipe(gzip)  // comprime
    .pipe(writeStream)  // escribe la salida
    .on('finish', function () {  // imprimimos OK
        console.log('OK');
});
