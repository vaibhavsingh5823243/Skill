require('dotenv').config({path:"../.env"});
const express = require("express");
const multer = require("multer");
const multerS3 = require('multer-s3');
const aws = require("aws-sdk");
const router = express.Router();
const path = require('path');
const config = require("./config");

const s3 = new aws.S3({
    secretAccessKey: config.secretAccessKey,
    accessKeyId: config.accessKeyId,
    region: config.region,

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
    bucket: config.bucket,
    acl: config.acl,
    key: (req, file, cb) => {
        console.log(file);
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

router.post("/profile",upload.single('profile'), (req, res, err) => {
    try {
        let filePath = req.file.location;
        console.log(filePath);
        res.send(filePath);
    }
    catch (err) {
        res.send(err);
    }
})


module.exports = router;