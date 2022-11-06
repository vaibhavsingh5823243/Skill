require('dotenv').config();
const upload = require('./upload');
const emailsender = require('./email');
const database = require('./databases');
const tableName = process.env.userDb//process.env.userDb;
const statusCode = { notExist: "NE", exist: "AE", notMatch: "NM", match: "M", inserted: "I", notInserted: "NI", error: "E", success: true, "failed": true }


//encrypt usercode

class Authentication {
    verification(req, res) {
        let email = req.body.email;
        database.isExist(email, tableName, (cbData) => {
            if (req.url === '/forgetpassword') {
                if (cbData) {
                    let otp = Math.floor((Math.random() * 1000000) + 1)
                    let data = `Your otp for password reset is:${otp}`;
                    emailsender.email(email, data, (cbvalue) => {
                        res.send(`${otp}`);
                    });
                }
                else {
                    res.send(statusCode['notExist']); // user does not exist
                }
            }
            else {
                if (cbData === false) {
                    let otp = Math.floor((Math.random() * 1000000) + 1)
                    let data = `Your otp for email verification is:${otp}`;
                    emailsender.email(email, data, (cbvalue) => {
                        res.send(`${otp}`);
                    });
                }
                else {
                    res.send(statusCode['exist']);//user already exist
                }
            }
        })
    }

    registration(req, res) {
        let userInfo = req.body;
        userInfo['uniqueCode'] = 'stu_' + `${new Date().getTime()}`;
        delete userInfo['password1'];
        database.insert(userInfo, tableName, (cbData) => {
            res.send(cbData);
        });
    }

    login(req, res) {
        let userInfo = req.body;
        console.log(userInfo)
        database.validate(userInfo, tableName, (cbData) => {
            if (cbData === true) {
                delete userInfo['password'];
                database.filter(tableName, userInfo, (userInfo) => {
                    res.send(userInfo);
                })
            }
            else {
                res.send(`${cbData}`);
            }
        });

    }

    update(req, res) {
        let userInfo = req.body;
        var emailJson = { email: userInfo['email'] };
        database.filter(tableName, emailJson, (image) => {
            var storeImg = image[0]['image']
            if (storeImg != userInfo['image']) {
                storeImg = storeImg.split("/");
                let originalName = storeImg[storeImg.length - 1];
                upload.deleteFile(originalName);
            }
        }, ['image']);

        database.update(userInfo, tableName, (cbData) => {
            if (cbData) {
                database.filter(tableName, emailJson, (userInfo) => {
                    res.send(userInfo);
                })
            }
            else {
                res.send(`${cbData}`);
            }
        })
    }

}

module.exports = new Authentication();
