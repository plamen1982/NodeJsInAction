const express = require('express');
const passport = require('passport');

let User = require('./models/user');

let router = express.Router();

router.use((req, res, next) => {

    //req.user is populated by Passport, currentUser accessible to all views
    res.locals.currentUser = req.user;
    //req.flash is populated by connect-flash
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

router.post('/login', passport.authenticate('login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

router.post('/logout', (res, req) => {
    req.logout();
    res.end('/');
});


function ensureAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        next();
    } else { 
        req.flash('info', 'You must be logged in to see this page.');
        res.redirect('/login');
    }
}

router.get('/edit', ensureAuthenticated, (req, res) => {
    res.render('edit');
});

router.post('/edit', ensureAuthenticated, (req, res, next) => {
    //in req.user, user is populated by passport.js when we were authenticated
    console.log(req.body.displayName);
    console.log(req.body.bio);
    req.user.displayName = req.body.displayName;
    req.user.bio = req.body.bio;
    req.user.save((err) => {
        next(err);
        return;
    });
    req.flash('info', 'Profile updated!');
    res.redirect('/');
});

module.exports = router;