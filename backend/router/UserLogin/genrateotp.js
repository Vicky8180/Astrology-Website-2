
// const express = require('express');
// const nodemailer = require('nodemailer');
// const { google } = require('googleapis');
// const userModel = require('../../model/usermodel/UserSchema');
// const bodyParser = require('body-parser');
// const otpmodel = require('../../model/otp');
// const dotenv = require('dotenv')
// dotenv.config();
// const router = express.Router();

// var jsonParser = bodyParser.json();

// async function sendmail(data, callback) {
//   const otp = data.otp;
//   const sendTo = data.sendTo;

//   try {
   
//     const oAuth2Client = new google.auth.OAuth2({
//       clientId: process.env.clientId,
//       clientSecret: process.env.clientSecret,
//       redirectUri: 'http://localhost', // Placeholder redirect URI
//     });
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         type: 'OAuth2',
//         user: 'vyadav99x1@gmail.com',
//         clientId: process.env.clientId,
//         clientSecret: process.env.clientSecret,
//         // refreshToken: 'YOUR_REFRESH_TOKEN',
//         // accessToken: accessToken,
//       },
//     });
//     const mailOptions = {
//       from: 'vyadav99x1@gmail.com',
//       to: sendTo,
//       subject: 'Forgot Password reset!',
//       text: `Your otp is ${otp} and it's only valid for 5 minutes`,
//     };

//     // Send email
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent:', info.response);
//     callback(null, info);
//   } catch (error) {
//     console.log('Error in sending mail:', error);
//     callback(error);
//   }
// }

// router.post('/generateotp', jsonParser, async (req, res) => {
//   try {
//     const userEmail = req.body.userEmail;
//       const min = 100000;
//       const max = 999999;
//       const otp = Math.floor(Math.random() * (max - min + 1)) + min;
//       await otpmodel.create({
//         adminEmail: userEmail,
//         otp: otp,
//       });

//       const data = { sendTo: userEmail, otp: otp };

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
    
//   } catch (error) {
//     console.log('Error in sending mail:', error);
//     return res.status(500).json({ success: false, message: 'Failed to send email' });
//   }
// });

// module.exports = router;

const express = require('express');
const nodemailer = require('nodemailer');
const userModel = require('../../model/usermodel/UserSchema');
const bodyParser = require('body-parser');
const otpmodel = require('../../model/otp');
const dotenv = require('dotenv');
dotenv.config();
const router = express.Router();

var jsonParser = bodyParser.json();

async function sendmail(data) {
  const otp = data.otp;
  const sendTo = data.sendTo;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "vyadav99x1@gmail.com",
        pass: 'auqu sowp osbi cdnl',
      },
    });

    const mailOptions = {
      from: "vyadav99x1@gmail.com",
      to: sendTo,
      subject: 'Forgot Password reset!',
      text: `Your otp is ${otp} and it's only valid for 5 minutes`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return info;
  } catch (error) {
    console.log('Error in sending mail:', error);
    throw error; // Propagate the error
  }
}

router.post('/generateotp', jsonParser, async (req, res) => {
  try {
    const userEmail = req.body.userEmail;
    const min = 100000;
    const max = 999999;
    const otp = Math.floor(Math.random() * (max - min + 1)) + min;
    
    await otpmodel.create({
      adminEmail: userEmail,
      otp: otp,
    });

    const data = { sendTo: userEmail, otp: otp };
    const info = await sendmail(data);

    return res.json({
      success: true,
      message: 'Email sent successfully',
      emailResponse: info,
    });
  } catch (error) {
    console.log('Error in sending mail:', error);
    return res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

module.exports = router;

