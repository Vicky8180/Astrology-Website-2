const express = require("express");
const TransitionSchema = require("../../model/TransitionSchema")
const router = express.Router();
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
router.post("/transitionmake",jsonParser, async (req, res) => {
  try {
    const {
      name,
      email,
      address,
      city,
      country,
      phone,
      zipcode,
      totalprice,
      service,
    } = req.body;


    const data = await TransitionSchema.create({
        name,
        email,
        address,
        city,
        country,
        phone,
        zipcode,
        totalprice,
        service,
      } )


      if(data){

        return res.json({
            success:true,
            message: "Transition is completed, wait for your slot !"
        })

      }else{
        return res.json({
            success:false,
            message:"Sorry! Transition is not recorded please keep refrences of payment safe"
        })
      }



  } catch (error) {
    return res.json({
      success: false,
      message: "Transition not made",
    });
  }
});

module.exports= router;