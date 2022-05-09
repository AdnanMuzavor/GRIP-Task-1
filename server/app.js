const express = require("express");
const userrouter = require("./Router/Userrouters");
const app = express();

const port = process.env.PORT || 5000;

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json())
require("./connecttion/conn");
app.use("/api/user", userrouter);
app.listen(port, () => {
  console.log(`Listening to port number ${port}`);
});
