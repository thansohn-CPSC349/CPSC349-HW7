var http = require('http');
var fs = require('fs');
//var path = require('path');
var extract = require('./extract');
var wss = require('./websockets-server');

var handleError = function(req,err, res) {
    var filepath = extract(req.url, "app/404.html");
    fs.readFile(filepath, function (err, data) {
       res.end(data)
    });
}

var server = http.createServer(function (req, res) {
    var filepath = extract(req.url);
    fs.readFile(filepath, function (err, data) {
        if (err) {
            fs.readFile("app/404.html", function (err, data) {
                res.end(data)
             });
            return;
        } else {
            res.end(data);
        }
    });
});

var readFile = function(filepath, errorHandler) {
}

server.listen(3000);