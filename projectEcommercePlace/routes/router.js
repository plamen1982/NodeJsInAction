const express = require('express');

let router = express.Router();

    router.get('/', (req, res) => {
        res.render('index');
    });

    router.get('/index-admin', (req, res) => {
        res.render('index-admin');
    });

    router.get('/create-product', (req, res) => {
        res.render('create-product');
    });

    router.get('/customize-order', (req, res) => {
        res.render('customize-order');
    });

    router.get('/order-details', (req, res) => {
        res.render('order-details');
    });

    router.get('/order-status', (req, res) => {
        res.render('order-status');
    });

    router.get('/order-status-admin', (req, res) => {
        res.render('order-status-admin');
    });
    
module.exports = router;