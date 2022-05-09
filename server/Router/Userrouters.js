
const express = require("express");


const Bankuser = require("../Schemas/User");

const userrouter = express.Router();

//Post Users in DB
userrouter.post("/postuser", async (req, res) => {
  console.log(req.body);
  const newuser = new Bankuser(req.body);
  console.log(newuser);
  const createduser = await newuser.save();
  return res.status(200).send(createduser);
});

//Update account details as money transferred /withdrawn
userrouter.put("/updatebal", async (req, res) => {
  console.log(req.body);
  const { id, newbal } = req.body;

  const finduser = await Bankuser.findByIdAndUpdate(
    {
      _id: id,
    },
    {
      accbal: newbal,
    },
    { new: true }
  );
  return res.status(200).send(finduser);
});

//Get all users in DB

userrouter.get("/allusers", async (req, res) => {
  const allusers = await Bankuser.find();
  return res.status(200).send(allusers);
});
module.exports = userrouter;
