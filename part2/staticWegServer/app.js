const express = require('express');
const path = require('path');
var fs = require('fs');

const PORT = 3000;

let app = express();

app.use((req, res, next) => {
    console.log(`Request IP: ${req.url}`);
    console.log(`Request date: ${new Date()}`);
    next();
});

app.use((req, res, next) => {
    let filePath = path.join(__dirname, "static", req.url);
    fs.stat(filePath, (err, fileInfo) => {
        if(err) {
            next();
            return;
        }
        if(fileInfo.isFile()) {
            res.sendFile(filePath);
        } else {
            next();
        }
    })
})
// 404 is always ot the bottom of all middlewares no matter what.
app.use((req, res) => {
    res.status(404);
    res.send("File not found");
})

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
});
