require("dotenv").config({ path: "./.env" });
const express = require("express");
const connectDB = require("./db/index.js");
const app = express();

connectDB().then(()=>{
  app.listen(process.env.PORT || 3000, () =>
  console.log("server is runningn on port 3000=> http://localhost:3000")
);
}).catch((err)=>{
  console.log(err);
});


