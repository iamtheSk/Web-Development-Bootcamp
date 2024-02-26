// hold on this project because of i don't have much time and it bit stress full api for me

const express = require("express");
const app = express();

const bodyparser = require("body-parser");

const requ = require("request");

const https = require("https");


app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
})

app.post("/",function(req,res){


    const firstName = req.body.fname
    const lastName = req.body.lname
    const Email = req.body.e


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
    var url = "https://us21.api.mailchimp.com/3.0/lists/19cee231ee"

    const options = {
        method : "POST",
        auth: "salman:b4eb3dbb2f816ce8f2aee2e4ce8bd007-us21"
    }

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

// api
// b4eb3dbb2f816ce8f2aee2e4ce8bd007-us21

// list id
// 19cee231ee