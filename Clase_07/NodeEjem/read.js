// Se importa el modulo fs que empaqueta llamadas al sistema
// para manejo de archivos
const fs = require("fs");

// Recordar que es una llamada asíncrona
fs.readFile("small.txt", readDoneCallback);

// Por convencion el primer argumento es objeto JavaScript Error
// dataBuffer es un objeto de tipo Buffer
function readDoneCallback(error, dataBuffer) {
    //console.log(dataBuffer); // Imprime un objeto de la clase Buffer
    if (!error) {
        console.log(dataBuffer.toString());
    }
}
