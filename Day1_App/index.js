var express = require('express');

app = express();

app.get("/", function (req, res) {
    res.send("Hello, I am Sorowar");
});

app.listen(8000, function () {
    console.log("Server Successfully Running!")
})