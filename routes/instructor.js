const express = require('express');
const router = express.Router()
const db = require('./databases');
const instructorDb = db.instructor;

router.post('/',(req,res)=>{
    var instructorData = req.body;
    instructorDb.insert(instructorData,(cbData)=>{
        res.send(cbData);
    })
})

router.get('/',(req,res)=>{
    instructorDb.fetch((cbData)=>{
        res.send(cbData);
    })
})

module.exports = router;