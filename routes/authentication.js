require('dotenv').config({ path: '../.env' });
const emailsender = require('./email');
const database = require('./databases');
const config = require('./config');
const tableName = config.userDb//process.env.userDb;

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
                    res.send(false); // user does not exist
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
                    res.send(true);//user already exist
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
        database.validate(userInfo, tableName, (cbData) => {
            if (cbData) {
                delete userInfo['password'];
                database.filter(tableName,userInfo,(userInfo) => {
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
        database.update(userInfo, tableName, (cbData) => {
            if (cbData) {
                delete userInfo['password'];
                database.filter(tableName,userInfo,(userInfo) => {
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