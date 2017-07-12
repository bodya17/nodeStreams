var eventEmitter = new require('events').EventEmitter;
var counter = 0;
var em = new eventEmitter();

setInterval(function() {
    em.emit('timed', counter++);
}, 1000);

em.on('timed', function(data) {
    console.log('timed' + data);
});
