const express = require('express');
const path = require('path');
const http = require('http');
const ejs = require('ejs');

let app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        message: 'Hey everyoune! This is my web page'
    });
});

http.createServer(app).listen(3000);