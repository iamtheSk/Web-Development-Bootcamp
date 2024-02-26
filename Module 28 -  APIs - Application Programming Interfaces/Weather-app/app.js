 const express = require("express");
 const app = express();
 const https = require("https");
 const bodyparser = require("body-parser")

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){

    res.sendFile(__dirname+"/index.html");
});




app.post("/",function(req,res){
    console.log();
    const query = req.body.CityName;
    const apiKey = "467aa90c02eb1e78e22187e325b20035";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" +query+ "&appid=" + apiKey +"&units="+ unit;

    // https://api.openweathermap.org/data/2.5/weather?q=London&appid=467aa90c02eb1e78e22187e325b20035&units=metric

    https.get(url,function(response){
    console.log(response.statusCode);
    response.on("data",function(data) { //we mention this response.on fun inside the https.get method

    const weatherData = JSON.parse(data); //the JSON.parser method this convet any other type value into JS objects and that store in variable 
    // console.log(weatherData); // call the variable we get the actuall data what we need
    const temp = weatherData.main.temp
    const weatherDesription = weatherData.weather[0].description;
    const city = weatherData.name

    //add cloud image from api website
    const icon = weatherData.weather[0].icon
    const imageurl = "https://openweathermap.org/img/wn/"+icon+"@2x.png"
    //we able to include multiple res.write() method but only one res.send in get method
    res.write("<h1>The Temperature in "+ query +" is "+temp+" degree Celcuis</h1>")
    res.write("<p>The weather is currently " + weatherDesription + "</p>")
    res.write("<img src="+imageurl+">")
    res.send()
})
})

})




 app.listen(3000,function(){
    console.log("Now The Server is running on port 3000");
 })