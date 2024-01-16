const express = require("express")
const bodyParser = require('body-parser')
const userModel = require("../../model/usermodel/UserSchema")
const router= express.Router();

var jsonParser = bodyParser.json()
router.post('/createuser',jsonParser,async(req,res)=>{

  try {

    console.log(req.body)
    const response = await userModel.create({
        userName:req.body.userName,
        userEmail:req.body.userEmail,
        password:req.body.password,
        
    
    })

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