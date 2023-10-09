//will get all the onvfig from env file
require("dotenv").config();

const express = require("express");

//create application
const app = express();

const print = require("./controller");

//http method and controller method
app.get("/", print);

//will run the app
app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
