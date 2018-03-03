const express = require('express');
const stylus = require('stylus');

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

    app.use(express.static(config.rootPath + '/public'));
}