const fs = require('fs');

fs.createReadStream('a.txt')
    .pipe(fs.createWriteStream('b.txt'))