const express = require('express');
const path = require('path');

let app = express();

let varPath = path.join(__dirname, "avatar.jpg")

app.use((req, res) => {
    res.sendFile(varPath, (err)=>{
        if(err) {
            next(new Error("Error sending file!"))
        } else {
            console.log("File send");
        }
    });
});

app.use((err, req, res, next) => {
    console.error(err);
    next(err);
});

app.use((err, req, res, next) => {
    res.status(500);
    res.sedn("Internal server error");
});

app.listen(3000, ()=>{
    console.log("App started on port 3000");
});