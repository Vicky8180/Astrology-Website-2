const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const jsonParser = bodyParser.json();
const adminModel = require('../model/adminSchema');

router.post('/updateforgot', jsonParser, async (req, res) => {
  try {
    // console.log("1");
    const passf = req.body.pass1;
    const passs = req.body.pass2;
    const adminEmail = req.body.adminEmail;
 
    if (passf === passs ) {
      const filter = { adminEmail: adminEmail };
      const update = { password: passs };
      // console.log(filter);

      if(adminEmail){
        let data = await adminModel.findOneAndUpdate(filter, update, {
          returnOriginal: false,
        });
  
        return res.status(200).json({
          success: true,
          message: "password has been updated",
          data: data
        });
      }else {
        return res.json({
          success:false,
          message:"email not sent propely"
        })
      }

     
    } else {
      return res.status(404).json({
        success: false,
        message: "password did not update"
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while updating the password"
    });
  }
});

module.exports = router;
