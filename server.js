var http = require('http');
var app = require('express')();

app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Express app listening at http://%s:%s", host, port);
})