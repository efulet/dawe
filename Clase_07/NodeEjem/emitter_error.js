const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

emitter.emit('error', new Error('Esto es un error'));

emitter.on('error', function(err) {
    console.error('Algo muy malo paso!:', err.message);
});
