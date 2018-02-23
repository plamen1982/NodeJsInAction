const express = require('express');

const apiVersion1 = require('./api/api1');
const apiVersion2 = require('./api/api2');

let app = express();

app.use('/v1', apiVersion1);
app.use('/v2', apiVersion2);

app.listen(3000, ()=>{
    console.log("App listen on port: 3000");
});