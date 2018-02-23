const express = require('express');

let app = express();

app.get('/random/:min/:max', (req, res) => {
    let min = parseInt(req.params.min);
    let max = parseInt(req.params.max);

    if(isNaN(min) || isNaN(max)) {
        res.status(400);
        res.json({ error: "Bad request." });
        return;
    }

    let result = Math.round((Math.random() * (max - min)) + min);

    res.json({ result: result });
});

app.listen(3000, () => {
    console.log("App started on port 3000");
});


