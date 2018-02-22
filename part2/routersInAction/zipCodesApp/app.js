const path = require('path');
const express = require('express');
const zipdb = require('zippity-do-dah');
const ForecastIo = require('forecastio');

let app = express();
let weather = new ForecastIo("d0403949014d320184f232d70c28c4f4");

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get(/^\/(\d{5})$/, (req, res, next) => {
    let zipcode = req.params[0];
    let location = zipdb.zipcode(zipcode);

    if(!location.zipcode) {
        next();
        return;
    }

    let latitude = location.latitude;
    let longitude = location.longitude;

    weather.forecast(latitude, longitude, (err, data) => {
        if(err) {
            next();
            return;
        }

        res.json({
            zipcode: zipcode, 
            temperature: data.currently.temperature
        });
    });
});

    app.use((req, res) => {
        res.status(404).render('404');
    });

    app.listen(3000);







