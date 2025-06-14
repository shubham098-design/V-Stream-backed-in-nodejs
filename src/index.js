require("dotenv").config({ path: "./.env" });
const express = require("express");
const connectDB = require("./db/index.js");
const cookieParser = require("cookie-parser");
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser())




const userRouter = require("./routes/user.routes.js")




app.use("/api/v1/user", userRouter)

connectDB().then(()=>{
  app.listen(process.env.PORT || 3000, () =>
  console.log("server is runningn on port 3000=> http://localhost:3000")
);
}).catch((err)=>{
  console.log(err);
});


