const instance = require("../../server");
const express = require("express")

const router= express.Router();

router.post('/checkout',async(req,res)=>{
    console.log("1")
    const options = {
        amount: Number(req.body.amount * 100),
        // amount:60000,
        currency: "INR",
      };
    
      const order = await instance.orders.create(options);
      res.status(200).json({
        success: true,
        order,
      });
})

module.exports=router;

