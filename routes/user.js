var express = require('express');
var router = express.Router();
var emailsender = require('./email')
var database = require('./databases');
var userdb = database.user;

//registration part
var verify = (req, res) => {
  console.log(req.body)
  var email = req.body.email;
  userdb.isExist(email, (cbData) => {
    console.log(cbData);
    if (cbData === false) {
      var otp = Math.floor((Math.random() * 1000000) + 1)
      var data = `Your otp for email verification is:${otp}`;
      emailsender.email(email, data, (cbvalue) => {
        res.send(`${otp}`);
      });
    }
    else {
      res.send(true);
    }
  })


}
router.post('/emailverification', verify)

router.post('/register', (req, res) => {
  var userInfo = req.body;
  delete userInfo['password1'];
  userInfo['user_role'] = 'student';
  userInfo['usercode'] ='stu_'+`${new Date().getTime()}`;
  console.log(req.body);
  userdb.insert(userInfo, (cbData) => {
    console.log(cbData);
    res.send(cbData);
  });
})

router.post('/login', (req, res) => {
  var userInfo = req.body;
  userdb.validate(userInfo, (cbData)=>{
    console.log(cbData);
    res.send(`${cbData}`);
  });
})

//delete user
router.get('/delete/:id', (req, res) => {
  console.log(req.params.id);
  db.delete(req.params.id);
  db.fetch(res);
})

module.exports = router;

