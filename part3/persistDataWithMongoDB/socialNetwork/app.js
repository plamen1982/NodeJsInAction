const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

const routes = require('./routes');
const setUpPassport = require('./setuppassport');

let app = express();

mongoose.connect('mongodb://localhost:27017/test');

setUpPassport();

app.set('port', process.env.PORT || 3000);

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

//{ extended: false } option for more secure and simpler parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
    secret: 'lkjdfsalkjdfsakl;',
    resave: false,
    saveUninitialized: false
}));

app.use(flash());


app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
})