var express = require("express");
var app = express();
app.set('view engine','ejs');

app.get("/QA", function(req,res){
    res.render('Rendering2.ejs',{
        'name':'QA',
        'phy':50,
        'che':40,
        'mat':90
    });
});
app.get("/NBS", function(req,res){
    res.render('Rendering2.ejs',{
        'name':'NBS',
        'phy':60,
        'che':70,
        'mat':40
    });
});
app.listen(8000);