const express = require('express');
const logger = require('morgan');
const http = require('http');
const path = require('path');

let app = express();
let publicPath = path.resolve(__dirname, "public");

app.use(logger("short"))

app.use(express.static(publicPath))

app.use((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Looks like you didn't find a static file.")
})

// app.use((req, res, next) => {
//     let minute = (new Date()).getMinutes();
//     if(minute % 2 === 0) {
//         next();
//     } else {
//         res.statusCode = 403;
//         res.end('Not authorized.')
//     }
// });

// app.use((req, res) => {
//     res.end('Secret info: pass is "swordfish"!')
// })

http.createServer(app).listen(3000);