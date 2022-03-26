require('dotenv').config({path:"../.env"});
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const config = require('./config');
const oAuth2Client = new google.auth.OAuth2(config.CLIENT_ID, config.CLIENT_SECRET, config.REDIRECT_URL);
oAuth2Client.setCredentials({ refresh_token: config.REFRESH_TOKEN });

async function sendMail(email, data, callback) {
    const accessToken = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAUTH2',
            user: config.SENDER,
            clientId: config.CLIENT_ID,
            clientSecret: config.CLIENT_SECRET,
            refreshToken: config.REFRESH_TOKEN,
            accessToken: accessToken
        }
    })
    const mailOptions = {
        from: config.SENDER,
        to: `${email}`,
        subject: "SkillArk Payment",
        html: `<pre>${data}</pre>`,

    };
    const result = await transport.sendMail(mailOptions);
    return callback(result);
}

module.exports.email = sendMail; 