const express = require('express');
const mongoose = require('mongoose');

const router = require('./routes/router');

const PORT = process.env.PORT || 3050;

let app = express();

let config = require('./server/config');

require('./server/mongoose')(mongoose);

require('./server/express')(app, config);

app.use(router);

app.listen(PORT, () => {

    console.log(`Server is running on port: ${PORT}`);

});