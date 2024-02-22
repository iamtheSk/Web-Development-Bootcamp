import bodyParser from "body-parser";
import express from "express";import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let bandName = ""

// for load up the html into server
app.use(bodyParser.urlencoded({extended : true}));


// it get the html element input value then add and store send to next functions
function bandNameGenerator (req,res,next){
  bandName = req.body["street"] + req.body["pet"]
  next()
}

// call the function and that functio use by app
app.use(bandNameGenerator)


// send the html file
app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/public/index.html");
})

// Get the form data back and send that into another route
app.post('/submit',(req,res) => {
  res.send(`<h1>Your band name is: <h2> ${bandName}✨</h2>`);
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
