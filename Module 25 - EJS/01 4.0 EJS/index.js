import express from "express";


const app = express()
const port = 3000;


app.get("/",(req,res)=>{

    const d = new Date('July 23, 1983');
    const day = d.getDay();

    // Messages
    let type = "a Weekday"
    let adv  = "it's a time to work hard"

    if(day === 0 || day === 6){
        type = "a Weekend"
        adv  = "it's a time to have Some fun"
    }

    res.render("index.ejs",{
        dayType : type,
        advice: adv
    });
});

app.listen(port,()=>{
    console.log("Sever running up on the Port:3000");
});