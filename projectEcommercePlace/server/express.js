const express = require('express');
const stylus = require('stylus');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const flash = require('connect-flash');

module.exports = (app, config) => {

    app.use(stylus.middleware(
        {
            src: config.rootPath + '/public',
            compile: (str, path) => {
                return stylus(str).set('filename', path);
            }
        }
    ));

    app.set('view engine', 'pug');
    app.set('views', config.rootPath + '/views');

    app.use(morgan('short'));

    app.use(flash());

    app.use(express.static(config.rootPath + '/public'));

    app.use(bodyParser.urlencoded({ extended: false }));

}