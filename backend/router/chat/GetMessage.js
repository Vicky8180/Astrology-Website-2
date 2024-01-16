const express = require("express")
const messagaModel= require("../../model/chatmodel/messageModel")
const router=express.Router();


router.get('/getmessages', async(req,res)=>{

try {
   const chatId=req.query.chatId;

    const data= await messagaModel.find({chat:chatId});

    return res.status(200).json({data:data,
    messages:"data fetched successfully"})
    

} catch (error) {
    
    return res.json({message:"error in getting messages"})
}

})


module.exports=router;