const express = require('express');
const path = require('path');

let app = express();

let varPath = path.join(__dirname, "avatar.jpg")

app.use((req, res) => {
    res.sendFile(varPath);
});

app.listen(3000, ()=>{
    console.log("App started on port 3000");
});