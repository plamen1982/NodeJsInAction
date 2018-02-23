const express = require('express');

let api = express.Router();

api.get('/timezone', (req, res) => {
    res.send('Current time zone');
});

api.get('/all-time-zones', (req, res) => {
    res.send('All time zones')
});

module.exports = api;