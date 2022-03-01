const express = require('express');
const router = express.Router();
const database = require('./databases')
const config = require('./config');
const tableName = config.courseDb;

router.get('/',(req,res)=>{
    database.fetch(tableName,(cbData)=>{
        res.send(cbData);
    })
});

router.post('/',(req,res)=>{
    var courseData = req.body;
    database.insert(courseData,tableName,(cbData)=>{
        res.send(cbData);
    })
})

router.get('/meta',(req,res)=>{
    database.fetchMeta(tableName,(cbData)=>{
        res.send(cbData);
    });
})

module.exports = router;