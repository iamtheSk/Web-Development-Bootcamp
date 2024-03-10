//jshint esversion:6
require('dotenv').config()
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

// passport.js level 5 imports
const session = require("express-session")
const passport = require("passport")
const passportLocalMongoose = require("passport-local-mongoose")

// hashing encryption using md5
// const md5 = require('md5')
// console.log(md5("12345"));

//for encryption
// var encrypt = require('mongoose-encryption');

const app = express()
const port = 3000

app.use(express.static("public"))
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended : true}))

// just above the mongoose connect provide express-session from passport.js
app.use(session({
    secret: "Our little secret.",
    resave:false,
    saveUninitialized :false,
}))
// initialize passport
app.use(passport.initialize());
// setup session
app.use(passport.session());


// To connect the database using this
mongoose.connect("mongodb://127.0.0.1:27017/userDB",{useNewUrlParser : true})

// mongoose.set('useCreateIndex',true);

//user schema
const userSchema = new mongoose.Schema({
    email :String,
    password : String
})

// provide encrypt plugin before the model created
//we can encrypt the certain fields only for that we provide that in second parameter
//it encrypt when we call the save method it decrypt when we call the find method
// const secrets = "Thisisourlittlesecret" -- PROVIDE IN ENV
// userSchema.plugin(encrypt,{secret : process.env.SECRET,encryptedFields: ['password']})

// for initialze the passport-mongoose same like encryption we provide here
userSchema.plugin(passportLocalMongoose);

const User  = new mongoose.model("User",userSchema);


// provide serialise and deserialise of passport below the mongoose model

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.get("/register",(req,res)=>{
    res.render("register")
})

app.get("/secrets",(req,res)=>{
    if(req.isAuthenticate()){
        res.render("secrets");
    } else {
        res.redirect("/login")
    }
})

//01 for register
// get data from register route create the userdb
app.post("/register",(req,res)=>{

    // get the user type data from register page and put on the document
    // const newUser = new User({
    //     email : req.body.username,
    //     password : req.body.password
    // });

    // save method is shortcut for insertOne in mongoose
    // newUser.save().then(()=>{
    //     res.render("secrets")
    //     console.log("Successfully saved data into db");
    //     }).catch((err)=>{
    //         console.log(err);
    //     })

    User.register({username : req.body.username}, req.body.password , function(err,user){
        if(err){
            console.log(err);
            res.redirect("/register");
        } else{
            passport.authenticate("local")(req,res,function(){
                res.redirect("/secrets");
            });
        }
    })
})

//02 for login 
// get data from login and check the db same as type then route to the home page
app.post('/login',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({email : username}).then((founduser) =>{
                if(!founduser){
                    res.render('login')
                    console.log("credentails not match");
                }
                else{
                    if(founduser.password === password){
                        res.render("secrets")
                        console.log("It's works");
            }
        }})
    })



app.listen(port,()=>{
    console.log(`Server is now running on the port : ${port}`);
})