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
//route forsweetalert
app.get("/swal",function(req,res)
{   
    res.render("sweetalert");
});
//route for selectize
app.get("/selectize",function(req,res)
{   
    res.render("selectize");
});