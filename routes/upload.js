const express = require("express");
const router = express()//.Router();
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const cf = require('./config');

const s3 = new aws.S3({
    secretAccessKey: 'RG4dmk5FiY38Uuz3hGDOYAmSama41YrSrqLqV6Bx',
    accessKeyId: 'AKIAZD5NLXH466YWCPUG',
    region: 'ap-south-1',
    acl: 'public-read'
});

var upload = multer({
    storage:multerS3({
        s3:s3,
        bucket:"vaibhav58",
        key:(req,file,cb)=>{
            cb(null,file.fieldname + "_" + file.originalname);
        }
    })
})

router.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

router.post('/upload',upload.single('file'),(req,res)=>{
res.send(req.file.location);
})



const deleteFile = async (fileName) => {
    await s3.deleteObjects({ Bucket: 'vaibhav58', Key: fileName }).promise();
    console.log("File deleted successfully.")
}

router.listen(3000,console.log("App is running on port 3000"))