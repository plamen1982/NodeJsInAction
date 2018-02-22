const express = require('express');
const logger = require('morgan');
const path = require('path');

const PORT = 3000;
let staticPath = path.join(__dirname, "static");
let app = express();

app.use(logger("short"));

app.use(express.static(staticPath));

// 404 is always ot the bottom of all middlewares no matter what.
app.use((req, res) => {
    res.status(404);
    res.send("File not found");
});

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
});
