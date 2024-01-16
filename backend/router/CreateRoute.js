const express = require("express")
const bodyParser = require('body-parser')
const adminModel = require("../model/adminSchema")
const router= express.Router();

var jsonParser = bodyParser.json()
router.post('/create',jsonParser,async(req,res)=>{

  try {
    const response = await adminModel.create({
        adminName:req.body.adminName,
        adminEmail:req.body.adminEmail,
        password:req.body.password,
         phone:req.body.phone,
         facebook:req.body,
         instagram:req.body,
         whatsapp:req.body,
         image:req.body,
         state:req.body,
         city:req.body,
         zipcode:req.body,
         about:req.body,
         street:req.body,
         youtube:req.body,

    
    })
       console.log("here")
    return res.status(200).json(response)

  } catch (error) {
     console.log(error)
    res.status(404).json({
        success:false,
        message:error
    })
  }


})


module.exports=router