require('dotenv').config({ path: '../.env' });
var HOST = 'http://localhost:';
var PaytmConfig = {
  // mid: "DmEAFL13411334535026",
  // key: "ipIRwmFEm1B@KKDE",
  mid:"rXBPFj10520108198180",
  key:"L3jNgRtLEBbtrmmW",
  website: "skillark",
  CALLBACK_URL: `${HOST}3000/payment/callback`
};

var EmailConfig = {
  CLIENT_ID: '872754693635-3c0l7h3v6evdudmgb78rk6ku6qboq36p.apps.googleusercontent.com',
  CLIENT_SECRET: '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',
  REDIRECT_URL: 'https://developers.google.com/oauthplayground',
  REFRESH_TOKEN: '1//041Fkegy6DI-2CgYIARAAGAQSNwF-L9Ir5_CtyeFpW7d5LZclf6bhiCcd6D-AOCDClrexAst5r-VpgXj5BjtxXvPuYf_v5QWa7lc',
  SENDER: 'skillarkpvtltd@gmail.com'
}


var DatabaseConfig = {
  host: '18.232.50.244',//in future domain name
  user: 'root',
  password: 'skillark',
  database: 'SKILLARKPVTLMT',
  connectionLimit: 10,
  transaction: 'TRANSACTIONS',
  course: "LiveTrainingMaster",
  userDb:'USERS',
  instructorDb:'INSTRUCTORDETAILS',
  contactDb:'ContactUs',
}

module.exports.db = DatabaseConfig;
module.exports.PaytmConfig = PaytmConfig;
module.exports.EmailConfig = EmailConfig;