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

require('./server/express')(app);

app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, 'views'));

app.use(stylus.middleware(
    {
        src: path.normalize(__dirname) + '/public',
        compile: (str, path) => {
            return stylus(str).set('filename', path);
        }
    }
));

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(router);

app.listen(PORT, () => {

    console.log(`Server is running on port: ${PORT}`);

});