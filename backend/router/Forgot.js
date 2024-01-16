const express = require('express');
const nodemailer = require('nodemailer');
const adminModel = require('../model/adminSchema');
const bodyParser = require('body-parser');
const otpmodel = require('../model/otp');

const router = express.Router();

var jsonParser = bodyParser.json();

function sendmail(data, callback) {
  const otp = data.otp;
  const sendFrom = data.sendFrom;
  const sendTo = data.sendTo;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vyadav99x1@gmail.com',
      pass: 'qpmt ueop vpxn nrtd',
    },
  });

  var mailOptions = {
    from: 'vyadav99x1@gmail.com',
    to: sendTo,
    subject: 'Forgot Password reset!',
    text: `Your otp is ${otp} and it's only valid for 5 minutes`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('Error in sending mail:', error);
      callback(error); // Pass the error to the callback
    } else {
      console.log('Email sent:', info.response);
      callback(null, info); // Pass the info to the callback
    }
  });
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































// const express = require('express')
// var nodemailer = require('nodemailer');
// const adminModel = require('../model/adminSchema')
// const bodyParser = require('body-parser');
// const otpmodel= require("../model/otp")

// const router = express.Router();

// var jsonParser = bodyParser.json();

// function sendmail(data,res){
//     // console.log(data)
//     const otp = data.otp;
//     const sendFrom = data.sendFrom
//     const sendTo=data.sendTo

//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user:  'vyadav99x1@gmail.com' ,
//           pass: 'ohch nhep oaco gali'
//         }
//       });
    
//       var mailOptions = {
//         from: 'vyadav99x1@gmail.com',
//         to: sendTo,
//         subject: 'Forgot Password reset!',
//         text: `Your otp is ${otp} and its only vaild for 5 minutes`
//       };
      
   
//      const da=  transporter.sendMail(mailOptions,
//         function(error, res){
//           if (error) {                        
//             return console.log("Error in sending mail");
//           }                   
//           return res
//       }
//       );
//       console.log(da)
//       return da;

    
//  } 

// router.post('/forgot' , jsonParser, async(req,res)=>{

//     try {
//     const adminEmail= req.body.adminEmail
//     // console.log(user)
//    const email= await  adminModel.findOne({adminEmail})

   
//    if(email){
//     const min = 100000; 
//   const max = 999999; 
//   const otp=Math.floor(Math.random() * (max - min + 1)) + min; 
//       await otpmodel.create({
//    adminEmail:adminEmail,
//    otp:otp

//       })
//   const data={"sendTo":adminEmail,"otp":otp}

//     const retureddata= sendmail(data, res);
//     console.log(retureddata)



//    }else {

//     return res.status(200).json({success:false,
//     message:"Email id dose not exists"
//     })
//    }

    



// return res.json("success")

//     } catch (error) {

//         console.log("error in senfing mail")
//         return res.json("failed")
        
//     }


// })

// module.exports= router


