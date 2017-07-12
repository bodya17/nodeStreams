var request = require('request')
var zlib = require('zlib')
var s = request('http://www.lichess.org/')
var fs = require('fs')

// s.pipe(zlib.createGzip()).pipe(fs.createWriteStream('zipped-lichess-html.gz'))
s.pipe(fs.createWriteStream('zipped-lichess-html.html'))