const express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(3000, () => {
    console.log('Epxress Listen to port: 3000')
});