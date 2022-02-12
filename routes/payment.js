var express = require('express');
var router = express.Router();
var config = require('./config')
var formidable = require('formidable');
const qs = require("querystring");
const https = require('https')
const PaytmChecksum = require('./checksum.js')

router.get('/', (req, res, next) => {
  res.render('paymentindex');
})

router.post('/paynow', (req, res, next) => {
  // Route for making payment
  var userData = {
    amount: req.body.amount,
    customerId: req.body.name,
    customerEmail: req.body.email,
    customerPhone: req.body.phone
  };

  if (!userData.amount || !userData.customerId || !userData.customerEmail || !userData.customerPhone) {
    res.status(400).send('Payment failed')
  } else {
    var params = {};
    params['MID'] = config.PaytmConfig.mid;
    params['WEBSITE'] = config.PaytmConfig.website;
    params['CHANNEL_ID'] = 'WEB';
    params['INDUSTRY_TYPE_ID'] = 'Retail';
    params['ORDER_ID'] = 'TEST_' + new Date().getTime();
    params['CUST_ID'] = userData.customerId;
    params['TXN_AMOUNT'] = userData.amount;
    params['CALLBACK_URL'] = 'http://localhost:3000/payment/callback';
    params['EMAIL'] = userData.customerEmail;
    params['MOBILE_NO'] = userData.customerPhone;


    PaytmChecksum.generateSignature(params, config.PaytmConfig.key).then(
      function(checksum) {
        //var txn_url = "https://securegw-stage.paytm.in/theia/processTransaction"; // for staging
        var txn_url = "https://securegw.paytm.in/theia/processTransaction"; // for production

        var form_fields = "";
        for (var x in params) {
          form_fields += "<input type='hidden' name='" + x + "' value='" + params[x] + "' >";
        }
        form_fields += "<input type='hidden' name='CHECKSUMHASH' value='" + checksum + "' >";

        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        res.write('<html><head><title>Merchant Checkout Page</title></head><body><center><h1>Please do not refresh this page...</h1></center><form method="post" action="' + txn_url + '" name="f1">' + form_fields + '</form><script type="text/javascript">document.f1.submit();</script></body></html>');
        res.end();
      });
  }
})



router.post('/callback',(req,res)=>{
  var paytmCallBack = req.body;
  var paytmChecksum = req.body.CHECKSUMHASH;
  delete paytmCallBack.CHECKSUMHASH;
  var isVerifySignature = PaytmChecksum.verifySignature(paytmCallBack, config.PaytmConfig.key, paytmChecksum);
  if(isVerifySignature){
    var paytmParams = {};
    paytmParams["MID"] = paytmCallBack.MID;
    paytmParams["ORDERID"] = paytmCallBack.ORDERID;
    PaytmChecksum.generateSignature(paytmParams,config.PaytmConfig.key).then((checksum)=>{
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
      var post_req = https.request(options,(post_res)=>{
        post_res.on('data',(chunk)=>{
          response += chunk;
        });

        console.log("Response are:" + response);
        post_res.on('end',()=>{
          let result = JSON.parse(response)
          console.log("Result:" + result);
          if (result.STATUS === 'TXN_SUCCESS') {
            console.log("We are success");
            //store in db
            // db.collection('payments').doc('mPDd5z0pNiInbSIIotfj').update({paymentHistory:firebase.firestore.FieldValue.arrayUnion(result)})
            // .then(()=>console.log("Update success"))
            // .catch(()=>console.log("Unable to update"))
            // alert(JSON.stringify(result))
            res.send(JSON.stringify(result));
          }
          //res.redirect(`http://localhost:3000/payment/status/${result.ORDERID}`)
        });
      });
      post_req.write(post_data);
      post_req.end();
    })

  }
  else{
    res.send("Checksum Mismatched");
  }
})



module.exports = router;
