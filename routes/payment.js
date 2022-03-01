const express = require('express');
const router = express.Router();
const https = require('https')
const PaytmChecksum = require('./checksum.js');
const config = require('./config')
const emailsender = require('./email');
const database = require('./databases');
const tableName = config.transactionDb;

router.get('/', (req, res, next) => {
  res.render('paymentindex');
})

router.post('/paynow', (req, res, next) => {
  // Route for making payment
  var userData = {
    amount: String(req.body.amount),
    customerId: String(req.body.phone),
    customerEmail: String(req.body.email),
    customerPhone: String(req.body.phone),
    courseCode: String(req.body.title),
    fullname: String(req.body.fullName)
  };
  if (!userData.fullname || !userData.amount || !userData.customerId || !userData.customerEmail || !userData.customerPhone) {
    res.status(400).send('Payment failed')
  } else {
    var params = {};
    params['MID'] = config.PaytmConfig.mid;
    params['WEBSITE'] = config.PaytmConfig.website;
    params['CHANNEL_ID'] = 'WEB';
    params['INDUSTRY_TYPE_ID'] = 'Retail';
    params['ORDER_ID'] = `${userData.customerEmail}_${new Date().getTime()}`;
    params['CUST_ID'] = userData.customerId;
    params['TXN_AMOUNT'] = userData.amount;
    params['CALLBACK_URL'] = config.PaytmConfig.CALLBACK_URL + `/${userData['courseCode']}` + `/${userData['fullname']}`;
    params['EMAIL'] = userData.customerEmail;
    params['MOBILE_NO'] = userData.customerPhone;
    console.log(params)
    PaytmChecksum.generateSignature(params, config.PaytmConfig.key).then(
      function (checksum) {
        //var txn_url = "https://securegw-stage.paytm.in/theia/processTransaction"; // for staging
        var txn_url = "https://securegw.paytm.in/theia/processTransaction"; // for production

        res.write(JSON.stringify({ txn_url, checksum, params }));
        res.end();
      });
  }
})


router.post('/callback/:coursename/:name', (req, res) => {
  var userInfo = req.params;
  var paytmCallBack = req.body;
  var paytmChecksum = paytmCallBack['CHECKSUMHASH'];
  delete paytmCallBack.CHECKSUMHASH;
  var isVerifySignature = PaytmChecksum.verifySignature(paytmCallBack, config.PaytmConfig.key, paytmChecksum);
  if (isVerifySignature) {
    var paytmParams = {};
    paytmParams["MID"] = paytmCallBack.MID;
    paytmParams["ORDERID"] = paytmCallBack.ORDERID;
    PaytmChecksum.generateSignature(paytmParams, config.PaytmConfig.key).then(function (checksum) {
      paytmParams["CHECKSUMHASH"] = checksum;
      var post_data = JSON.stringify(paytmParams);
      var options = {
        /* for Staging */
        //hostname: 'securegw-stage.paytm.in',
        /* for Production */
        hostname: 'securegw.paytm.in',
        port: 443,
        path: '/order/status',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': post_data.length
        }
      };
      var response = "";
      var post_req = https.request(options, function (post_res) {
        post_res.on('data', function (chunk) {
          response += chunk;
        });

        post_res.on('end', function () {
          let result = JSON.parse(response);
          let email = result['ORDERID'].split('_')[0];
          let dbData = {
            EMAIL: email,
            COURSECODE: userInfo['coursename'],//userInfo[0].replace("*"," "),
            TRANSACTION_HIST: result,
            STATUS: 0,
            NAME: userInfo['name']
          }
          var message = {
            Course: dbData['COURSECODE'],
            status: result['STATUS'],
            Amount: result['TXNAMOUNT'],
            TXNID: result['TXNID'],
            BANKTXNID: result['BANKTXNID']
          }
          var msg = "";
          for (var key in message) {
            msg += `${key}:${message[key]}\n`
          }
          emailsender.email(email, msg, (cbData) => {
            console.log('success');
          })
          if (result.STATUS === 'TXN_SUCCESS') {
            dbData['STATUS'] = 1;
            database.insert(dbData, tableName, (cbData) => {
              res.send(cbData);
            })

          }
          else {
            database.insert(dbData, tableName, (cbData) => {
              res.send(false);
            })
          }
        });
      });
      post_req.write(post_data);
      post_req.end();
    });
  }
  else {
    res.send("Failed");
  }
})

module.exports = router;

