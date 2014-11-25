var express = require('express');
var RequestSender = require('./RequestSender.js');

// Constants
var DEFAULT_PORT = 3000;
var PORT = process.env.PORT || DEFAULT_PORT;

// App
var app = express();
app.get('/method', function (req, res) {
    RequestSender
        .send({
            host: 'localhost',
            port: '3000',
            method: 'GET'
        })
        .then(function(response) {
            res.send(response);
        })
        .fail(function(error) {
            res.send(error);
        });
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);