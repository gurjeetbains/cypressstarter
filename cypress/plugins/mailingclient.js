'use strict';
const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'Server host name here',
        port: 25,
        secure: false // true for 465, false for other ports
    });
    let attachments=[
        {   // filename and content type is derived from path
            path: '../reports/full_report.html'
        }
    ]  
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'Tester@mailer.com', // sender address
        to: 'receiver@mailer.com', // list of receivers
        subject: 'Test Results for test', // Subject line
        text: 'Please find the attached report for the test result', // plain text body
        attachments: attachments
    });
    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

main().catch(console.error);
