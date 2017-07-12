var Readable = require('stream').Readable,
    stream = new Readable(),
    data = ('culpa ipsa in aliquam totam, sint facilis ').split(' ');
var fs = require('fs');

stream._read = function() {
    if (data.length) {
        setTimeout(() => {
            stream.push(data.shift() + ' ');
        }, 200);
    } else {
        stream.push(null);
    }
};

stream.pipe(process.stdout);