require('dotenv').config();
const express=require('express');
const router=express.Router();
const database = require('./databases');
const tableName = process.env.userAssesmentMapping;



router.post("/userassesment",(req,res)=>{
    var examInfo=req.body;
    database.insert(examInfo,tableName,(cbData)=>{
        res.send(cbData);
    })
})

router.post("/result",(req,res)=>{
    var info=req.body;
    database.filter(tableName,info,(cbData)=>{
        res.send(cbData);
    })
})

module.exports = router