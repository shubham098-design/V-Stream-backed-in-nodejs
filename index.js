const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

app.use(bodyParser.json());

const DB =
  "mongodb+srv://shubhamdhaniyan:shu251203@cluster0.iapvyvd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DB).then(() => {
  console.log("connection successful");
}).catch((err) => {
  console.log(err);
})

app.post("/", async(req, res) => {
  console.log(req.body);
  res.send("shubham kumar");
});

app.listen(3000, () =>
  console.log("server is runningn on port 3000=> http://localhost:3000")
);
