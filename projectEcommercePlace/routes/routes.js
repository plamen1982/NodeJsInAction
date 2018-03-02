const express = require('express');

module.exports = () => {
    let router = express.Router();

    router.get('', (res, req) => {
        res.render('index')
    });   
};