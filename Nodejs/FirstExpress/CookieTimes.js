// var HTTP = require("http");
// var URL = require("url");
var express = require("express");
var cookieparser = require("cookie-parser");

var app = express();
app.use(cookieparser());

// var process = function (req, res) {
//     var path = URL.parse(req.url,true).pathname;
//     res.writeHead(200, {'content-Type':'text/html'});
//     res.write("<html style='background-color: #ffff00'>");
//     res.write("<center>");   

app.get("/times", function(req,res) {
    res.write("<h1>Select Times Table</h1>");
    for (var i = 1; i <= 10; i++) {
        res.write('<a href="http://localhost:2051/range/'+i+'">'+i+"</a>");
        res.write('<br>');
    }
res.end();
});

app.get("/range/:table?*", function(req, res) {
    res.cookie("Table", req.params.table);

    if (req.params.table ===undefined) {
        res.write('<a href="http://localhost:2051/times">Click here to choose a times table</a>');
    }
    else {
        console.log("Table cookie created");
        res.write("<h1>Now select range:</h1>");     
        for (var i = 10; i <= 100; i+=10) {
            res.write('<a href="http://localhost:2051/result/'+i+'">'+i+"</a><br>");
        }
        res.write('<a href="http://localhost:2051/times">Choose a different table</a>');
        res.end();
}});
app.get("/result/:range?*", function (req, res) {
    if (req.cookies.Table === undefined && req.params.range === undefined) {
        res.write('<a href="http://localhost:2051/times">Click here to choose a times table</a>');
    }
    else if (req.params.range === undefined) {
        res.write('<a href="http://localhost:2051/range/">Please select a range</a>');
    }
    else{
        var tNo = parseInt(req.cookies.Table);
        var rNo = parseInt(req.params.range);
        //console.log("Range cookie created");
        //res.write("<h1>Here is your times table:</h1>");

        for (var i = 1; i <= rNo; i++){
            res.write("<p>"+tNo+" x "+i+" = "+(tNo*i)+"</p>");
        }
        res.write('<p><a href="http://localhost:2051/times">Choose a different table</a></p>');
        res.write('<p><a href="http://localhost:2051/range">Choose a different range</a></p>');
        res.end();
}});
    // res.write("</center>");
    // res.write("</html>");

app.listen(2051, function(){
    console.log("I did it all for the cookie.");
});