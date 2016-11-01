var express = require('express')
var livereload = require('livereload')

var app = express()

app.use('/node_modules', express.static(__dirname + '/node_modules'))
app.use('/', express.static(__dirname + '/public'))

app.get('*', function (req, res) {
    res.redirect('/');
});

app.listen(3000)
console.log('Listening on port 3000.')

app = livereload.createServer({
    exts: [ 'html', 'css', 'js', 'png', 'gif', 'jpg', 'ts' ]
})

app.watch(__dirname)
console.log('Live reload enabled')
