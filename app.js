var express         =require("express"),
    port            =process.env.PORT || 8000,
    app             =express()


app.use(express.static(__dirname + "/public"));
app.set("view engine","hbs");

app.listen(port,function()
{
    console.log("http://localhost:"+port+"/");
});

//HOME
app.get("/",function(req,res)
{   
    res.render("form");
});
//HOME
app.get("/sweet",function(req,res)
{   
    res.render("sweetalert");
});
//HOME
app.get("/dialog",function(req,res)
{   
    res.render("dialog");
});
//HOME
app.get("/test",function(req,res)
{   
    res.render("form");
});