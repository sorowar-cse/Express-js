var express = require('express');

app = express();

app.get("/", function (req, res) {
    res.send("Home Page");
});

app.post("/about", function (req, res) {
    res.send("About Page");
});

app.put("/contact", function (req, res) {
    res.send("Contact Page");
});

app.delete("/developper", function (req, res) {
    res.send("Developper Page");
});

app.listen(8000, function () {
    console.log("Server Successfully Running!")
})