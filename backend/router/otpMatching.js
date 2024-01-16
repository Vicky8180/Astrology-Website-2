const expree = require("express");
const bodyParser = require("body-parser");

const otpModel = require("../model/otp");

var jsonParser = bodyParser.json();
const router = expree.Router();

router.post("/otpmacting", jsonParser, async (req, res) => {
  try {
 
    const otp = req.body.otp;

    const adminEmail = req.body.adminEmail;
    console.log(adminEmail);
    const data = await otpModel.findOne({ adminEmail, otp });
    

  if(data){
    const expiry = data.expireIn.getTime();
    const nowtime = Date.now();
   

    if (expiry + 300000 > nowtime) {
        console.log("in time");
        return res
          .status(200)
          .json({ success: true, message: "otp matched in time", data: data });
      } else {
        console.log("time gone");
        return res.json({
          success: false,
          message: "time gone ",
          data: [],
        });
      }
  }else {

    return res.json({success:false,
       message:"otp did not matched "
    })

  }

  } catch (error) {
    console.log("error");
    return res.json("error");
  }
});

module.exports = router;
