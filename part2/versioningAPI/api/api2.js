const express = require('express');

let api = express.Router();

api.get('/timezone', (req, res) => {
    res.send('Timezone version 2')
 });

 module.exports = api;