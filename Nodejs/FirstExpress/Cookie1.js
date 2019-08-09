var express = require("express");
var cookieparser = require("cookie-parser");

var app = express();
app.use(cookieparser()); //ONLY REQUIRED TO READ COOKIES, NOT CREATE THEM

app.get("/makecookie", function(req, res) {
    res.cookie("QA_Cookie1","Express-cookies-yo"); //WORKS LIKE A KEY VALUE PAIR
    res.end("Cookie created");
});

app.get("/readcookie", function(req, res) {
    res.write(req.cookies.QA_Cookie1);
    res.end();
});

app.get("/removecookie", function(req, res) {
    res.clearCookie("QA_Cookie1");
    res.end("Cookie removed");
});

app.listen(8000, function(){
    console.log("Server started up");
});
