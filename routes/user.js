var express = require('express');
var router = express.Router();
var emailsender = require('./email')
var database = require('./databases');

var userdb = database.user;

//registration part

router.get('/', function(req, res, next) {
  res.render('registration');
});


router.post('/register',(req,res)=>{
  var userInfo = req.body;
  userdb.insert(userInfo,res);
  })

//login part

// router.get('/login',(req,res)=>{
//   res.render('login');
// });


router.post('/login',(req,res)=>{
  var userInfo = req.body;
  userdb.validate(userInfo,res);
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
  emailsender.email(email,data,(cbvalue)=>{
    console.log("Email send");
    res.end();
  });
  //res.end();

}


router.post('/emailverification',verify)



module.exports = router;
