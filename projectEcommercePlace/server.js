const express = require('express');
const path = require('path');
const stylus = require('stylus');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const passport = require('passport');
const pug = require('pug');

const routes = require('./routes/routes');

const PORT = process.env.PORT || 3040;
let app = express();

// require('./server/express')(app);

app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, 'views'));

// app.use('/', routes);
app.get('/', (req, res) => {
    res.render('index', { title: 'Donur place', message: 'Hello new customer'})
})
app.listen(PORT, () => {

    console.log(`Server is running on port: ${PORT}`);

});