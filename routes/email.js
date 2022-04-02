require('dotenv').config();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URL);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

async function sendMail(email, data, callback) {
    const accessToken = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAUTH2',
            user: process.env.SENDER,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: accessToken
        }
    })
    const mailOptions = {
        from: process.env.SENDER,
        to: `${email}`,
        subject: "SkillArk Payment",
        html: `<pre>${data}</pre>`,

    };
    const result = await transport.sendMail(mailOptions);
    return callback(result);
}

module.exports.email = sendMail; 