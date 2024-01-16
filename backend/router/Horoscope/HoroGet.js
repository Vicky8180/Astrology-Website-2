const express = require("express")
const bodyParser = require('body-parser')
const HoroscopeModel = require("../../model/horoscope/horoscopeSchema")
const router= express.Router();

var jsonParser = bodyParser.json()
router.get('/fetchhoro',jsonParser,async(req,res)=>{

  try {
         
      const data = await HoroscopeModel.find({});

      if(data){
        return res.json({success:true,
            message:"got  horoscopes ",
        data:data})
      }else {
        return res.json({success:false,
        message:"could not able to fetch horoscop "})
      }

  } catch (error) {
     console.log(error)
    res.status(404).json({
        success:false,
        message:error
    })
  }


})


module.exports=router