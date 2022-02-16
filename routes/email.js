const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const config = require('./config');
const EmailConfig = config.EmailConfig;
const { send } = require('express/lib/response');

const oAuth2Client = new google.auth.OAuth2(EmailConfig.CLIENT_ID,EmailConfig.CLIENT_SECRET,EmailConfig.REDIRECT_URL);
oAuth2Client.setCredentials({refresh_token:EmailConfig.REFRESH_TOKEN});

const email=async function sendMail(email,data){
    try{
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            service:'gmail',
            auth:{
               type:'OAUTH2',
               user:EmailConfig.SENDER,
               clientId:EmailConfig.CLIENT_ID,
               clientSecret:EmailConfig.CLIENT_SECRET,
               refreshToken:EmailConfig.REFRESH_TOKEN,
               accessToken:accessToken
            }
        })
        const mailOptions = {
            from:EmailConfig.SENDER,
            to:`${email}`,
            subject:"SkillArk Payment",
            text:`${data}`,
            
        };
        const result = await transport.sendMail(mailOptions);
        return result;
    }
    catch(err){
        return err;
    }
}

module.exports.email = email; 