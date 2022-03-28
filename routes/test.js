const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");



router.post("/",(req,res)=>{
// console.log(req.param)
const userInfo = req.body;
console.log(userInfo.firstName);



res.send("Sending something i dont know.");
})



module.exports = router