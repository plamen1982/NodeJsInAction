const express = require('express');
const passport = require('passport');
let User = require('../models/User');


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

    router.get('/login', (req, res) => {
        res.render('account/login');
    });
    router.post('/login', (req, res, next) => {
        User.findOne({ username: username }, (err, resultUsername) => {
            if(err) {
                return next(err);
            } else if(resultUsername) {
                req.flash('error', 'User already exists');
                return res.redirect('/register')
            } 

            let newUser = new User({
                username, 
                password
            });

            newUser.save(next);

        });
    });

    router.get('/register', (req, res) => {
        res.render('account/register');
    });
    router.post('/register', (req, res) => {
        let username = req.body.username;
        let password = req.body.password;
    });
    
module.exports = router;