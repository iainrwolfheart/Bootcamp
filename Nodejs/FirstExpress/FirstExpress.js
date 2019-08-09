var express = require("express");
var app = express();

app.get("/delete", function(req, res) {
    res.send("Hello, get request!");
});
app.post("process", function(req, res) {
    res.send("Hello, post request");
});
app.all("/showall", function(req, res) {
    res.send("You have succesfully handled any request with this method!");
});
app.put(["/process", "/place"], function(req, res) {
    res.send("Hello, put request!");
});

app.listen(8000);