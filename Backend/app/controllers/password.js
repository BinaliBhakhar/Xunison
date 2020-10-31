let md5 = require('md5');
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var http = require("http");
const ejs = require('ejs');
const fs = require('fs');
require('dotenv').config();
module.exports = {
    forgotPassword,
    resetPassword
}

/*
     Purpose: create new password
*/
async function forgotPassword(req, res) {
    try {
        let password = req.query;
        let recordExist = await query(`SELECT COUNT(*) AS emailExist FROM USER WHERE username='${password.username}'`);

        if (recordExist[0].emailExist) {    
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'abca47894@gmail.com',
                  pass: 'cuqzqowujndjcvms'
                }
              });
              
              const mailOptions = {
                from: 'abca47894@gmail.com',
                to: 'binal9913@gmail.com',
                subject: 'Invoices due',
                text: 'To reset your password, please follow this link.\\http://localhost:4201/resetpassword'
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                  console.log(error);
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
            res.send({
                'success': true,
                'msg': 'forgotPassword recieved',
                PasswordData: recordExist
            });

        }
        else {
            res.send({
                'success': false,
                'msg': 'Please give valid Email address',
                PasswordData: []
            });
        }


    } catch (error) {
        res.status(500).send({
            'success': false,
            'msg': 'Error! getting password',
            'error': error
        });

    }

}

/*
     Purpose: reset your password
*/

async function resetPassword(req, res) {
    try {
        let password = req.query;
        let recordExist = await query(`UPDATE USER SET password='${md5(password.password)}' WHERE username='${password.username}'`);

        res.send({
            'success': true,
            'msg': 'resetPassword recieved',
            PasswordData: recordExist
        });

    } catch (error) {
        res.status(500).send({
            'success': false,
            'msg': 'Error! Reset password',
            'error': error
        });

    }
}

// let testAccount = await nodemailer.createTestAccount();
//             let transporter = nodemailer.createTransport({
//                 host: "smtp.ethereal.email",
//                 port: 587,
//                 secure: false, // true for 465, false for other ports
//                 auth: {
//                   user: testAccount.user, // generated ethereal user
//                   pass: testAccount.pass, // generated ethereal password
//                 },
//               });
//               let info = await transporter.sendMail({
//                 from: '"Fred Foo 👻" <foo@example.com>', // sender address
//                 to: "binu.bhakhar@gmai.com, binu.bhakhar@gmai.com", // list of receivers
//                 subject: "Hello ✔", // Subject line
//                 text: "Hello world?", // plain text body
//                 html: "<b>Hello world?</b>", // html body
//               });

//               console.log("Message sent: %s", info.messageId);
//               console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//               main().catch(console.error);

// let transporter = nodemailer.createTransport({
//     service: "gmail",                
//     auth: {
//       user:process.env.EMAIL,
//       pass:process.env.PASSWORD
//     },
//   });
//   let mailOption = {
//     from: 'tabbnabbers@gmail.com', // sender address
//     to: 'binu.bhakhar@gmai.com', // list of receivers
//     subject: 'testing and testing', // Subject line
//     text: 'hellooooo', // plain text body
//     // html: "<b>Hello world?</b>", // html body
//   };

//  transporter.sendMail(mailOption,function(err,data){
//      if(err){
//          console.log('Error occurs',err);
//      }else{
//          console.log('Email sent!!!');
//      }
//  });


// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'binal9913@gmail.com', // here use your real email
//       pass: '143binal143' // put your password correctly (not in this question please)
//     }
//   });
// let mailOptions = {
//     from: 'foomailfortest@gmail.com',
//     to: 'binal9913@gmail.com',
//     subject: 'Test',
//     text: 'Hello World!'
// };

// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         return console.log(error.message);
//     }
//     console.log('success');
// });