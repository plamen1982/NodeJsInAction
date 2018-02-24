const express = require('express');
const passport = require('passport');

let User = require('./models/user');

let router = express.Router();

router.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.errors = req.flash('error');
    res.locals.info = req.flash('info');
    next();
});

router.get('/', (req, res, next) => {
    User.find()
        .sort({ createdAt: 'descending' })
        .exec((err, users) => {
            if (err) { return next(err); }
            res.render('index', { users: users });
        });
});

router.get('/signup', (req, res) => {
    res.render('signup')
});

router.post('/signup', (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

    User.findOne({ username: username }, (err, name) => {
        if(err) { return next(err) }
        if(name) {
            req.flash('error', 'User already exists');
            return (res.redirect('/signup'));
        }

        let newUser = new User({
            username: username,
            password: password
        });

        newUser.save(next);
    });
}, passport.authenticate('login', {
    successRedirect: '/',
    failureRedirect: 'signup',
    failureFlash: true
}));

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;