// const express = require('express');
// const nodemailer = require('nodemailer');
// const adminModel = require('../model/adminSchema');
// const bodyParser = require('body-parser');
// const otpmodel = require('../model/otp');

// const router = express.Router();

// var jsonParser = bodyParser.json();

// function sendmail(data, callback) {
//   const otp = data.otp;
//   const sendFrom = data.sendFrom;
//   const sendTo = data.sendTo;

//   var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'vyadav99x1@gmail.com',
//       pass: 'auqu sowp osbi cdnl',
//     },
//   });

//   var mailOptions = {
//     from: 'vyadav99x1@gmail.com',
//     to: sendTo,
//     subject: 'Forgot Password reset!',
//     text: `Your otp is ${otp} and it's only valid for 5 minutes`,
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log('Error in sending mail:', error);
//       callback(error); // Pass the error to the callback
//     } else {
//       console.log('Email sent:', info.response);
//       callback(null, info); // Pass the info to the callback
//     }
//   });
// }

// router.post('/forgot', jsonParser, async (req, res) => {
//   try {
//     const adminEmail = req.body.adminEmail;
//     const email = await adminModel.findOne({ adminEmail });

//     if (email) {
//       const min = 100000;
//       const max = 999999;
//       const otp = Math.floor(Math.random() * (max - min + 1)) + min;
//       await otpmodel.create({
//         adminEmail: adminEmail,
//         otp: otp,
//       });

//       const data = { sendTo: adminEmail, otp: otp };

//       sendmail(data, (error, info) => {
//         if (error) {
//           return res.status(500).json({
//             success: false,
//             message: 'Error sending email',
//           });
//         } else {
//           return res.json({
//             success: true,
//             message: 'Email sent successfully',
//             emailResponse: info,
//           });
//         }
//       });
//     } else {
//       return res.status(200).json({
//         success: false,
//         message: 'Email id does not exist',
//       });
//     }
//   } catch (error) {
//     console.log('Error in sending mail:', error);
//     return res.status(500).json({ success: false, message: 'Failed to send email' });
//   }
// });

// module.exports = router;



// COMMENTTED CODE IS WORKING NOT BELOW ONE BECAUSE OF {google} 





const express = require('express');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const adminModel = require('../model/adminSchema');
const bodyParser = require('body-parser');
const otpmodel = require('../model/otp');
const dotenv = require('dotenv')
dotenv.config();
const router = express.Router();

var jsonParser = bodyParser.json();


async function sendmail(data, callback) {
  const otp = data.otp;
  const sendTo = data.sendTo;

  try {
   
    const oAuth2Client = new google.auth.OAuth2({
      clientId: process.env.clientId,
      clientSecret: process.env.clientSecret,
      redirectUri: 'http://localhost', // Placeholder redirect URI
    });
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'vyadav99x1@gmail.com',
        clientId: process.env.clientId,
        clientSecret: process.env.clientSecret,
        // refreshToken: 'YOUR_REFRESH_TOKEN',
        // accessToken: accessToken,
      },
    });
    const mailOptions = {
      from: 'vyadav99x1@gmail.com',
      to: sendTo,
      subject: 'Forgot Password reset!',
      text: `Your otp is ${otp} and it's only valid for 5 minutes`,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    callback(null, info);
  } catch (error) {
    console.log('Error in sending mail:', error);
    callback(error);
  }
}

router.post('/forgot', jsonParser, async (req, res) => {
  try {
    const adminEmail = req.body.adminEmail;
    const email = await adminModel.findOne({ adminEmail });

    if (email) {
      const min = 100000;
      const max = 999999;
      const otp = Math.floor(Math.random() * (max - min + 1)) + min;
      await otpmodel.create({
        adminEmail: adminEmail,
        otp: otp,
      });

      const data = { sendTo: adminEmail, otp: otp };

      sendmail(data, (error, info) => {
        if (error) {
          return res.status(500).json({
            success: false,
            message: 'Error sending email',
          });
        } else {
          return res.json({
            success: true,
            message: 'Email sent successfully',
            emailResponse: info,
          });
        }
      });
    } else {
      return res.status(200).json({
        success: false,
        message: 'Email id does not exist',
      });
    }
  } catch (error) {
    console.log('Error in sending mail:', error);
    return res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

module.exports = router;
























