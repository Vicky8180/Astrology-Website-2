
const express = require("express");
const bodyParser = require('body-parser');
const adminModel = require("../model/adminSchema");
const router = express.Router();
const setCookies = require("../Authentication/setCookies")
var jsonParser = bodyParser.json();

// router.post('/login', jsonParser, async (req, res) => {
//   try {
//     const adminEmail = req.body.adminEmail;
//     const password = req.body.password;

   
//     const user = await adminModel.findOne({ adminEmail, password });

//     if (user) {
     
//        const data=setCookies(user,res,"cookies setted")
//     } else {
//       return res.json({
//         success: false,
//         message: "Invalid credentials"
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       message: "Error in the login process"
//     });
//   }
// });



router.post('/login', jsonParser, async (req, res) => {
  try {
    const adminEmail = req.body.adminEmail;
    const password = req.body.password;

    const user = await adminModel.findOne({ adminEmail, password });
   
    console.log(user)
    if (user) {
      // Call the setCookies function and pass the response object
      setCookies(user, res, "cookies setted");
    } else {
      return res.json({
        success: false,
        message: "Invalid credentials"
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error in the login process"
    });
  }
});




module.exports = router;
