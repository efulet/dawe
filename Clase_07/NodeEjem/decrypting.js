const crypto = require('crypto');
const fs = require('fs');
const zlib = require('zlib');

const password = new Buffer(process.env.PASS || 'password');
const decryptStream = crypto.createDecipher('aes-256-cbc', password);
const gzip = zlib.createGunzip();

const readStream = fs.createReadStream('encriptado.gz');

readStream // Lee el archivo
    .pipe(gzip) // encripta
    .pipe(decryptStream)  // comprime
    .pipe(process.stdout)  // escribe la salida en el terminal
    .on('finish', function () {  // imprimimos OK
        console.log('OK');
});
