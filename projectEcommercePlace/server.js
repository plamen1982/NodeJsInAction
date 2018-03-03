const express = require('express');
const path = require('path');
const stylus = require('stylus');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const passport = require('passport');
const pug = require('pug');

const router = require('./routes/router');

const PORT = process.env.PORT || 3040;

let app = express();

let config = require('./server/config')

require('./server/express')(app, config);

app.use(router);

app.listen(PORT, () => {

    console.log(`Server is running on port: ${PORT}`);

});