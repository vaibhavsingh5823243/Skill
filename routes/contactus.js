const express = require('express');
const router = express.Router();
const config = require("./config");
const emailSender = require('./email');
const database = require('./databases');
const ADMIN = config.ADMIN;
const tableName = config.contactDb;

router.post("/", (req, res) => {
    var userInfo = req.body;
    var data = ""
    for (var key in userInfo) {
        data += `${key}:${userInfo[key]}\n`;
    }
    emailSender.email(ADMIN, data, (cbData) => {
        //console.log(cbData);
    });
    var message = "We have received your query.Our support team will contact you soon.\nThanks and regards SkilarkPvtLmt"
    emailSender.email(userInfo['email'], message, (cbData) => {
        //console.log(cbData);
    })

    database.insert(userInfo,tableName,(cbData) => {
        //res.send(cbData);
        console.log(cbData)
    })
   
})

module.exports = router;
