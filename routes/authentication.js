var express = require('express');
var router = express.Router();
var emailsender = require('./email')
var database = require('./usersdatabase');
var db = database.database;

//registration part

router.get('/', function(req, res, next) {
  res.render('registration');
});


const registerVal =(req,res,next)=>{

}

router.post('/register',registerVal,(req,res,next)=>{
  console.log(req.body);
  console.log("Getting data from register");

  //db.insert(req.body);
  res.write('Registration Successful.');
  })

//login part

router.get('/login',(req,res)=>{
  res.render('login');
});

router.post('/login',(req,res)=>{
  console.log("Getting request from frontend.");
  //db.validate(req.body,res);
})

//delete user

router.get('/delete/:id',(req,res)=>{
    console.log(req.params.id);
    db.delete(req.params.id);
    db.fetch(res);
})

var verify=(req,res)=>{
  var email = req.body.email;
  var otp = req.body.otp;
  var data={
    STATUS:"Your OTP for email verification:",
    TXNID:otp,
  }
  emailsender.email(email,data);
  res.send(data.TXNID)

}


router.post('/emailverification',verify)



module.exports = router;
