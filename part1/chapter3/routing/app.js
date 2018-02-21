const express = require('express');
const logger = require('morgan');
const http = require('http');
const path = require('path');

let app = express();
let publicPath = path.resolve(__dirname, 'public');

app.use(logger())

app.get('/', (req, res) => {
    res.end('Welcome home page')
})
app.get('/about', (req, res) => {
    res.end('Welcome about page')
})
app.get('/weather', (req, res) => {
    res.end('Welcome weather page');
})

app.get('/hello/:who', (req, res) => {
    res.end(`Hello ${req.params.who}.`)
})

app.use((req, res) => {
    res.statusCode = 404;
    res.end('404');
})

http.createServer(app).listen(3000);