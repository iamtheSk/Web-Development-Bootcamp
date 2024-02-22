//jshint esversion:6

const express = require("express");
const app = express();

app.get("/",function (request,response){
   response.send("<h1>Hello iam sk</h1>")
});

app.get("/contact",function(req,res){
    res.send("<h2>contact at : <b>iamsk04.r@gmail.com</b> Ph:No : 7539912802</h2>")
});

app.get("/about",function(req,res){
    res.send("Iam Salmankhan </br>Iam a aspiring fullstack developer </br> My native is Tiruppur </br> I complete my schooling in Nanjappa school Tiruppur");
});

app.get("/hobbies",function(req,res){
    res.send("<ul><li>Bike rides</li><li>Keep-fit-fanatic</li></ul>");
});

app.listen(3000,function(){
    console.log("Server started on port 3000");
});