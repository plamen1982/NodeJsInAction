const http = require('http');

function requestHandler(req, res) {
    if(req.url === '/') {
        console.log(`Coming reques is from: ${req.url}`)
        res.end('Welcome to our Huge website!')
    } else if(req.url === '/about') {
        console.log(`Coming reques is from: ${req.url}`)
        res.end('Wecome to our about page it is Huge!')
    }
}
let server = http.createServer(requestHandler)
server.listen(3000);