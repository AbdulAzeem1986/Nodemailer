const nodemailer = require("nodemailer");

const mailer = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user:'azeemharys3@gmail.com',
        pass:'fvnfqdpzkbkuobne'
    },
    port:465,
    host:'smtp.gmail.com'
});

var mailData = {
    from:'azeemharys3@gmail.com',
    to:'azeemharys1@gmail.com',
    subject:'Nodemailer test mail',
    text: 'This is the email send using Nodemailer package'
};

mailer.sendMail(mailData, (err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('Email sent successfully')
        }
    }
);