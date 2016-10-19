// npm install verror
const verror = require('verror');

function readFiles(archivos, callback) {
    for(let archivo of archivos) {
        return callback(new verror.VError('Fallo al leer el archivo %s', archivo));
    }
}

readFiles(['no-existo'], function(err, contenido) {
    if (err) { throw err; }
    console.log(contenido);
});
