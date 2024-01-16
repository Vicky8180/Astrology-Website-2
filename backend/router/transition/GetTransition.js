const express = require("express");
const TransitionSchema = require("../../model/TransitionSchema")
const router = express.Router();

router.get("/gettransition", async (req, res) => {
  try {

    const data = await TransitionSchema.find({})

      if(data){

        return res.json({
            success:true,
            data:data,
            message: "Transition are fetched!"
        })

      }else{
        return res.json({
            success:false,
            message:"Sorry! Transition are fetched"
        })
      }



  } catch (error) {
    return res.json({
      success: false,
      message: "Unable to fetch transitions",
    });
  }
});

module.exports= router