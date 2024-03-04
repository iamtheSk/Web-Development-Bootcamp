//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// This is for connect and send data to mongo using Mongooose

mongoose
.connect("mongodb://127.0.0.1:27017/wikiDB")
.then(() => console.log("Mongo will Connected"))
.catch((err) => console.log("Mongo Error", err) )



const articleSchema = {
    title: String ,
    content : String
}

const Article = mongoose.model("Article", articleSchema);

app.get("/articles",function(req,res){
    Article.find(function(err,foundarticle){
        console.log(foundarticle);
    })
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});