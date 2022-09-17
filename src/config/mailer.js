import nodeMailer from "nodemailer";

require('dotenv').config();

let transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: false, // use SSL-TLS
    auth: {
        user: "lcquang116@gmail.com",
        pass: "smcbfghlbkqcsgqp"
    },
    tls: {
        rejectUnauthorized: false
    }
});

let sendEmailNormal = (to, subject, htmlContent) => {
    let options = {
        from: "lcquang116@gmail.com",
        to: to,
        subject: subject,
        html: htmlContent
    };
    return transporter.sendMail(options);
};

let sendEmailWithAttachment = (to, subject, htmlContent, filename, path) => {
        let options = {
            from: "lcquang116@gmail.com",
            to: to,
            subject: subject,
            html: htmlContent,
            attachments: [
                {
                    filename: filename,
                    path: path
                }
            ]
        };
        return transporter.sendMail(options);
    }
;
module.exports = {
    sendEmailNormal: sendEmailNormal,
    sendEmailWithAttachment: sendEmailWithAttachment
};
