
const express = require("express");
const bodyParser = require('body-parser');
const userModel = require("../../model/usermodel/UserSchema");
const router = express.Router();
const setCookies = require("../../Authentication/setCookies")
var jsonParser = bodyParser.json();


router.post('/userlogin', jsonParser, async (req, res) => {
  try {
    const userEmail = req.body.email;
    const password = req.body.password;

    const user = await userModel.findOne({ userEmail, password });
   
   
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
