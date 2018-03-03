const express = require('express');

let router = express.Router();

    router.get('*', (req, res) => {
        res.render('index', { title: 'Donur Place', message: 'Hello new customer'});
    });

module.exports = router;