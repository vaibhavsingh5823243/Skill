var express = require('express');
var router = express.Router();
var db = require('./databases')
var courseDb = db.course;

router.get('/',(req,res)=>{
    courseDb.fetch(res);
});

router.post('/',(req,res)=>{
    courseDb.insert(req.body,res);
})

router.get('/meta',(req,res)=>{
    courseDb.fetchMeta(res);
})

module.exports = router;