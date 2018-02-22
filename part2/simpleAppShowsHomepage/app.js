const express = require("express");
let app = express();

app.get("/olivia", (req, res)=> {
    res.send("Welcome Olivia");
});

app.use((req, res) => {
    res.status(404);
    res.send("Page not founde");
});

app.listen(3000);