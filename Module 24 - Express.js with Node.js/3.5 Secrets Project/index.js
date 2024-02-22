//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

// set password
var userIsAuthorised = false
const password = 'iloveprogramming'

app.use(bodyParser.urlencoded({extended : true}));

// here if password same the var is true else false
function passwordCheck(req,res,next){
    if(req.body['password'] === password){
        userIsAuthorised = true
    }

next();
}

app.use(passwordCheck)

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
})


// same here if the var true print the secret html page else repat the same page if else done using ternary opearator
app.post('/check',(req,res)=>{
    userIsAuthorised ?
        res.sendFile(__dirname + "/public/secret.html")
    :
        res.sendFile(__dirname + "/public/index.html")
})





app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});