// hold on this project because of i don't have much time and it bit stress full api for me

const express = require("express");
const app = express();

const bodyparser = require("body-parser");

const requ = require("request");

const https = require("https");

 require("dotenv").config();


app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
})

app.post("/",function(req,res){


    const firstName = req.body.fname
    const lastName = req.body.lname
    const Email = req.body.e
    const apiKey = process.env.API_KEY;
    const auth = process.env.AUTH;


    var data = {
        memeber :[
            {

            email_address: Email,
            status : "subscribed",
            merge_fields :{
                FNAME : firstName,
                LNAME : lastName
            }

        }
    ]
    }

    var jsonData = JSON.stringify(data)
    var url = apiKey

    const options = {
      method: "POST",
      auth: auth,
    };

    const request = https.request(url,options,function(response){
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    });

        request.write(jsonData);
        request.end();

})


app.listen(3000,function(){
    console.log("Server is runinng on port 3000")
})

