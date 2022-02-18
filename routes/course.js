var express = require('express');
var router = express.Router();
var db = require('./databases')
var courseDb = db.course;

router.get('/',(req,res)=>{
    courseDb.fetch((cbData)=>{
        res.send(cbData);
    })
});

router.post('/',(req,res)=>{
    var courseData = req.body;
    courseDb.insert(courseData,(cbData)=>{
        res.send(cbData);
    })
})

router.get('/meta',(req,res)=>{
    courseDb.fetchMeta((cbData)=>{
        res.send(cbData);
    });
})

module.exports = router;