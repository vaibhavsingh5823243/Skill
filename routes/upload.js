require('dotenv').config();
const express = require("express");
const multer = require("multer");
const multerS3 = require('multer-s3');
const aws = require("aws-sdk");
const router = express.Router();
const path = require('path');
const statusCode = process.env.statusCode;

const s3 = new aws.S3({
    secretAccessKey: process.env.secretAccessKey,
    accessKeyId: process.env.accessKeyId,
    region: process.env.region,

})


var filter = (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb("Error: Allow images only of extensions jpeg|jpg|png !");
    }
}

var multerS3Config = multerS3({
    s3: s3,
    bucket: process.env.bucket,
    acl: process.env.acl,
    key: (req, file, cb) => {
        cb(null, Date.now().toString() + file.originalname)
    }
})


const upload = multer({
    storage: multerS3Config,
    fileFilter: filter,
})

router.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

//var customUpload = upload.fields([{ name: 'profile', maxCount: 1 }])

router.post("/profile", upload.single('profile'), (req, res, err) => {
    try {
        let filePath = req.file.location;
        res.send(filePath);
    }
    catch (err) {
        res.send(statusCode['error']);
    }
})

async function deleteFile(key) {
    var params = { Bucket: process.env.bucket, Key: key }
    if(key===process.env.defaultProfile){
        return false //default images can't be deleted
    }
    s3.deleteObject(params, (err, data) => {
        if (err) {
            return false;
        }
        return true;
    })
}


module.exports = {deleteFile,router}
// module.exports = router;