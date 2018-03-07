const express = require('express');
const passport = require('passport');
let User = require('../models/User');


let router = express.Router();

router.use((req, res, next) => {

    res.locals.currentUser = req.user;
    console.log(req.user);
    res.locals.errors = req.flash('error');
    res.locals.info = req.flash('info');
    next();

});

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
router.post('/login', passport.authenticate('login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

router.get('/register', (req, res) => {
    res.render('account/register');
});
router.post('/register', (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

        User.findOne({ username: username }, (err, resultUser) => {
            if(err) {

                return next(err);
            } 

            if(resultUser) {
            
                req.flash('error', 'User already exists');
                return res.redirect('/register')
            } 
                
            
            let newUser = new User({
                username: username, 
                password: password
            });

            newUser.save(next);
        })
    } , passport.authenticate('login', {
            successRedirect: '/',
            failureRedirect: '/register',
            failureFlash: true
}));

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
    res.end();
});



module.exports = router;