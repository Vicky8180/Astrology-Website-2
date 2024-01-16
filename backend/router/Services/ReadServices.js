const express = require("express")
const bodyParser = require('body-parser')
const ServiceModel = require("../../model/service/ServiceSchema")
const router= express.Router();

var jsonParser = bodyParser.json()
router.get('/fetchservice',jsonParser,async(req,res)=>{

  try {
         
      const data = await ServiceModel.find({});

      if(data){
        return res.json({success:true,
            message:"got services ",
        data:data})
      }else {
        return res.json({success:false,
        message:"could not able to fetch services "})
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