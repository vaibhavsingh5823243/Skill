//const HOST="https://skillark.org"
const HOST = "http://localhost:3000"
const config = {

  //Paytm Config

  //   # mid:"DmEAFL13411334535026"
  //   # key:"ipIRwmFEm1B@KKDE"
  mid: "rXBPFj10520108198180",
  key: "L3jNgRtLEBbtrmmW",
  website: "skillark",
  CALLBACK_URL: `${HOST}/payment/callback`,

  //EmailConfig

  CLIENT_ID: "872754693635-3c0l7h3v6evdudmgb78rk6ku6qboq36p.apps.googleusercontent.com",
  CLIENT_SECRET: "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",
  REDIRECT_URL: "https://developers.google.com/oauthplayground",
  REFRESH_TOKEN: "1//041Fkegy6DI-2CgYIARAAGAQSNwF-L9Ir5_CtyeFpW7d5LZclf6bhiCcd6D-AOCDClrexAst5r-VpgXj5BjtxXvPuYf_v5QWa7lc",
  SENDER: "skillarkpvtltd@gmail.com",

  //database on aws
  host: '18.232.50.244',//in future domain name
  user: 'root',
  password: 'skillark',
  database: 'skillarkpvtlmt',

  connectionLimit: 10,
  transactionDb: "transactions",
  courseDb: "CourseMaster",
  userDb: "UserPool",
  instructorDb: "InstructorMaster",
  contactDb: "contactus",
  ADMIN: "skillarkpvtltd@gmail.com",
  instructorSlideData: ['name', 'designation', 'description', 'course', 'image'],

  //awsBucket 
  secretAccessKey: "ro4XPsPKtR+jICvfwM3i828eOzt5/MmELD+Ni54v",
  accessKeyId: "AKIAZSJ37KZ7CLNNZNIY",
  region: "us-east-1",
  acl: "public-read",
  bucket: "skillark-assets/profiles",
  statusCode: { notExist: "NE", exist: "AE", notMatch: "NM", match: "M", inserted: "I", notInserted: "NI", error: "E", success: true, "failed": true }
}

// module.exports = HOST
module.exports = config