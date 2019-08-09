var express = require("express");
var app = express();

app.route("/iain")
.get(function(req, res) {
    res.send("Hello, Iain's get request!");
})
.post(function(req, res) {
    res.send("Hello, Iain's post request");
})

app.route("/shafeeq")
.all(function(req, res) {
    res.send("You have succesfully handled any Shafeeq request with this method!");
})
.put(function(req, res) {
    res.send("Hello, Shafeeq's put request!");
});

app.listen(8000);