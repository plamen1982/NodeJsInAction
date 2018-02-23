const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send('GET request');
});

app.post('/', (req, res) => {
    res.send('POST request');
    
});

app.put('/', (req, res) => {
    res.send('PUT request');
    
});

app.delete('/', (req, res) => {
    res.send('DELETE request');    
});

app.listen(3000, ()=>{
    console.log('App is listening on port 3000')
});