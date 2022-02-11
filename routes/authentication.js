var express = require('express');
var router = express.Router();
var database = require('./database');
var db = database.database;

//registration part

router.get('/', function(req, res, next) {
  res.render('registration');
});

router.post('/',(req,res,next)=>{
  db.insert(req.body);
  res.send('Registration Successful.');
  })

//login part

router.get('/login',(req,res)=>{
  res.render('login');
});

router.post('/login',(req,res)=>{
  db.validate(req.body,res);
})

//delete user

router.get('/delete/:id',(req,res)=>{
    console.log(req.params.id);
    db.delete(req.params.id);
    db.fetch(res);
})








module.exports = router;
