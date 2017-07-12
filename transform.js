var Transform = require('stream').Transform,
    tr = new Transform();

tr._transform = function(chunk, enc, cb) {
    var string = '' + chunk;
    this.push(string + '(' + string.length + ') ');
    cb();
};

process.stdin.on('data', function(input) {
    console.log(input);
})
    // .pipe(tr)
    // .pipe(process.stdout)