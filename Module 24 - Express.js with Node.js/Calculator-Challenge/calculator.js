
const express = require("express")
const bodyParser = require("body-parser");

const app = express()
app.use(bodyParser.urlencoded({extended:'true'}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req,res){
   var num1 = Number(req.body.num1);
   var num2 = Number(req.body.num2);
   var results = num1 + num2;
    res.send("The result of the calculaion is : "+results);
})

app.listen(3000,function(){
    console.log("The server is Started at port 3000");
})

app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
})

app.post("/bmiCalculator",function(req,res){
    var weight = Number(req.body.w);
    var height = Number(req.body.h);
    var results = weight / (height**2);
    res.send("The Value of your BMI is :" + results );
})