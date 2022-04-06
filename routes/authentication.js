require('dotenv').config();
const emailsender = require('./email');
const database = require('./databases');
const tableName = process.env.userDb//process.env.userDb;
const statusCode =  { notExist:"NE", exist:"AE", notMatch:"NM", match:"M", inserted:"I", notInserted:"NI", error:"E", success:true, "failed":true }

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
        database.validate(userInfo, tableName, (cbData) => {
            if (cbData===true) {
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
    
    isSame(userInfo){
        database.filter(tableName,{email:userInfo['email']},(cbData)=>{
            console.log(cbData[0].image===userInfo.image);
         },['image'])
    }


    update(req, res) {
        let userInfo = req.body;
        database.update(userInfo, tableName, (cbData) => {
            if (cbData) {
                var filter = {email:userInfo['email']};
                database.filter(tableName,filter,(userInfo) => {
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
