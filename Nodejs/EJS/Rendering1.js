var express = require("express");
var app = express();
app.set('view engine','ejs');

app.get("/rock", function(req,res){
    res.render('Rendering1.ejs',{
        'pageTitle': 'Welcome to The Rock',
        'name': 'Stanley Goodspeed',
        'msg':'',
    });
});
app.get("/ghost", function(req,res){
    res.render('Rendering1.ejs',{
        'pageTitle': 'Welcome to IMF',
        'name': 'Ethan Hunt',
        'msg':'This message will self-destruct in 5 seconds'
    });
});

app.listen(8000);