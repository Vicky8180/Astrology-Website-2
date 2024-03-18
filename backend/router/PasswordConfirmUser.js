const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const jsonParser = bodyParser.json();
const userModel = require('../model/usermodel/UserSchema');


router.post('/confirmpassworduser', jsonParser, async (req, res) => {
  try {
    
    const { pass1, pass2, userEmail } = req.body;
    console.log(pass1)

    
    if (pass1 !== pass2) {
      return res.status(400).json({ success: false, message: "Passwords do not match" });
    }
    console.log("pass2")
   
    if (!userEmail) {
      return res.status(400).json({ success: false, message: "Email not provided" });
    }

    console.log("email")
    const filter = { userEmail: userEmail };
    const update = { password: pass2 };

   
    const updateduser = await userModel.findOneAndUpdate(filter, update, {
      returnOriginal: false,
    });

  
    if (!updateduser) {
      return res.status(404).json({ success: false, message: "user not found" });
    }

    // Password updated successfully
    return res.status(200).json({
      success: true,
      message: "Password has been updated",
      data: updateduser
    });
  } catch (error) {
    // Handle any errors that occur during the update process
    console.error("Error updating password:", error);
    return res.status(500).json({ success: false, message: "An error occurred while updating the password" });
  }
});

module.exports = router;
