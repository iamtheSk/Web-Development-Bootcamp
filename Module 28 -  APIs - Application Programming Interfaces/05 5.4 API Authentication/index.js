import express, { response } from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";
 require("dotenv").config();


//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = process.env.USERNAME;
const yourPassword = process.env.PASSWORD;
const yourAPIKey = process.env.API_KEY;
const yourBearerToken = process.env.BEARER_TOKEN;

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

// 01
app.get("/noAuth", async (req, res) => {
  try {
  const Response = await axios.get(API_URL + "/random")
  res.render("index.ejs",{content : JSON.stringify(Response.data)})
  } catch (error){
    res.status(404).send(error.message)
  }
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

// 02
app.get("/basicAuth", async (req, res) => {
  try {
    const Response = await axios.get(API_URL + "/all?page=1",{
      auth : {
        username : yourUsername,
        password : yourPassword,
      }
    })
    res.render("index.ejs",{content : JSON.stringify(Response.data)})
    } catch (error){
      res.status(404).send(error.message)
    }
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
});

//03
app.get("/apiKey", async (req, res) => {
  try {
    const Response = await axios.get(API_URL + '/filter',{
      params : {
        score : 7,
        apiKey : yourAPIKey,
      }
      })
    res.render("index.ejs",{content : JSON.stringify(Response.data)})
    } catch (error){
      res.status(404).send(error.message)
    }
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

// 04 
app.get("/bearerToken", async (req, res) => {
  try {
    const Response = await axios.get(API_URL + `/secrets/1`,{
      headers : {
        Authorization : `Bearer ${yourBearerToken}`
      }
    })
    res.render("index.ejs",{content : JSON.stringify(Response.data)})
    } catch (error){
      res.status(404).send(error.message)
    }
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
