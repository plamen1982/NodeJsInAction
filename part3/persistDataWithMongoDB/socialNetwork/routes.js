const express = require('express');

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

module.exports = router;