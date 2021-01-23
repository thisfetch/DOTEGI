const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.get('/Enter.html', function(req, res, next) {
    res.sendFile(__dirname + '/Enter.html');
});



app.listen(3000);
