var express = require("express");
var app = express();

app.use(function(request, response, next){
    console.log("I am the Middleware, I always run first");
    next();
});
//EXECUTES BEFORE ANY ROUTE

app.use("/", function(request, response, next){
    console.log("I am the second Middleware");
    next();
});
//2ND MIDDLEWARE, ALSO EXECUTES BEFORE ANY ROUTING

app.use("/login", function(request, response, next){
    console.log("I am the login route");
    next();
});
//EXECUTES BEFORE THE LOGIN ROUTE

app.get("/", function(request, response, next){
    response.send("Wilkommen ins Homepage!");
    next();
});
//2ND MIDDLEWARE, ALSO EXECUTES BEFORE ANY ROUTING

app.get("/login", function(request, response, next){
    response.send("Welcome to the Login page!");
    next();
});
app.listen(8000);