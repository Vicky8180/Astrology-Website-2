const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
const jsonParser = bodyParser.json();
const userModel = require("../../model/usermodel/UserSchema");

router.put("/updateuseramount",jsonParser, async (req, res) => {
  try {
    const {
      userEmail
      ,aviaibleBalance
    } = req.body;
  //  console.log(req.body)
  //  const user = await userModel.findOne({ userEmail});
  //  console.log(user.aviaibleBalance)
  //  const finalBal=user.aviaibleBalance+aviaibleBalance
    const filter= {userEmail:userEmail};
    const update={
        aviaibleBalance
    }


   const updatedData= await userModel.findOneAndUpdate(filter,update,{new:true});

    if (updatedData) {
      return res.json({
        success: true,
        data: updatedData,
        message: "amount updated",
      });
    } else {
      return res.json({
        success: false,

        message: "amount not updated",
      });
    }
  } catch (error) {
    console.log("error in updating amount");
    return res.json({ message: "error in upating ", success: false });
  }
});


module.exports= router;