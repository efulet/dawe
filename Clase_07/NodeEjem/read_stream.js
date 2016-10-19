const fs = require("fs");
const readableStreamEvent = fs.createReadStream("big.txt");

readableStreamEvent.on('data', function (chunkBuffer) {
    console.log('Se obtuvo un trozo', chunkBuffer.length, 'bytes');
});

readableStreamEvent.on('end', function() {
    console.log('Se obtuvo todo el archivo');
});

readableStreamEvent.on('error', function (err) {
    console.error('Hmm, tenemos un error aca!', err);
});
