var express = require('express');
const https = require('https')
const PaytmChecksum = require('./checksum.js');
var router = express.Router();
var config = require('./config')
var emailsender = require('./email');
var database = require('./databases');
var transaction = database.transaction;

router.get('/', (req, res, next) => {
  res.render('paymentindex');
})

router.post('/paynow', (req, res, next) => {
  // Route for making payment
  var userData = {
    amount: req.body.amount,
    customerId: req.body.phone,
    customerEmail: req.body.email,
    customerPhone: req.body.phone,
    courseCode: req.body.name
  };
  if (!userData.amount || !userData.customerId || !userData.customerEmail || !userData.customerPhone) {
    res.status(400).send('Payment failed')
  } else {
    var params = {};
    params['MID'] = config.PaytmConfig.mid;
    params['WEBSITE'] = config.PaytmConfig.website;
    params['CHANNEL_ID'] = 'WEB';
    params['INDUSTRY_TYPE_ID'] = 'Retail';
    params['ORDER_ID'] = `${userData.customerEmail}_` + new Date().getTime();
    params['CUST_ID'] = userData.customerId;
    params['TXN_AMOUNT'] = userData.amount;
    params['CALLBACK_URL'] = config.PaytmConfig.CALLBACK_URL;
    params['EMAIL'] = userData.customerEmail;
    params['MOBILE_NO'] = userData.customerPhone;


    PaytmChecksum.generateSignature(params, config.PaytmConfig.key).then(
      function (checksum) {
        var txn_url = "https://securegw-stage.paytm.in/theia/processTransaction"; // for staging
        //var txn_url = "https://securegw.paytm.in/theia/processTransaction"; // for production

        var form_fields = "";
        for (var x in params) {
          form_fields += "<input hidden name='" + x + "' value='" + params[x] + "' >";
        }
        form_fields += "<input hidden name='CHECKSUMHASH' value='" + checksum + "' >";

        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        res.write('<html><head><title>Merchant Checkout Page</title></head><body><center><h1>Please do not refresh this page...</h1></center><form method="post" action="' + txn_url + '" name="f1">' + form_fields + '</form><script type="text/javascript">document.f1.submit();</script></body></html>');
        res.end();

      }).catch(function (error) {
        console.log(error);
      });
  }
})



router.post('/callback', (req, res) => {
  var paytmCallBack = req.body;
  var paytmChecksum = paytmCallBack['CHECKSUMHASH'];
  delete paytmCallBack.CHECKSUMHASH;
  var isVerifySignature = PaytmChecksum.verifySignature(paytmCallBack, config.PaytmConfig.key, paytmChecksum);
  if(isVerifySignature) {
    var paytmParams = {};
    paytmParams["MID"] = paytmCallBack.MID;
    paytmParams["ORDERID"] = paytmCallBack.ORDERID;
    PaytmChecksum.generateSignature(paytmParams, config.PaytmConfig.key).then(function (checksum) {
      paytmParams["CHECKSUMHASH"] = checksum;
      var post_data = JSON.stringify(paytmParams);
      var options = {
        /* for Staging */
        hostname: 'securegw-stage.paytm.in',
        /* for Production */
        //hostname: 'securegw.paytm.in',
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
          let result = JSON.parse(response)
          let userInfo = result.ORDERID.split('_');
          let dbData={
            EMAIL:userInfo[0],
            COURSECODE:"Machine Learning",
            TRANSACTION_HIST:result,
            STATUS:0
          }
          emailsender.email(userInfo,result)
          if (result.STATUS === 'TXN_SUCCESS') {
            dbData['STATUS'] = 1;
            transaction.insert(dbData)
            res.send('success');
          }
          else{
            transaction.insert(dbData)
            res.send("Failed")
          }
        });
      });
      post_req.write(post_data);
      post_req.end();
    });
  }
  else {
    console.log('checksum Mismatched');
  }
})

module.exports = router;
