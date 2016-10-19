const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

let contador = 0;

// Notar que esta sintaxis is ES6
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions
emitter.on('event', (p1) => {
    console.log("Evento", p1, "ocurrio", ++contador, "veces");
});

setInterval(function() {
    emitter.emit('event', 'a');
}, 3000);
