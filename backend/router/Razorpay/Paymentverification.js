const instance = require("../../server");
const crypto = require("crypto");
const dotenv =require("dotenv")
const express = require("express")
const bodyParser = require("body-parser")
const TransitionSchema = require("../../model/TransitionSchema")
dotenv.config();
var jsonParser = bodyParser.json();
const router= express.Router();
const userModel = require("../../model/usermodel/UserSchema")

router.post('/paymentverification', jsonParser, async (req,res)=>{

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

   
         const {name, email, minutes,phone,country, city, address,zipcode,serviceName,totalprice}   =    req.query
  
  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;  
  if (isAuthentic) {

// console.log(req.query)
    const data = await TransitionSchema.create({
      duration:minutes,
      name,
      email,
      address,
      city,
      country,
      phone,
      zipcode,
      totalprice,
     service:serviceName,
     transitionId:razorpay_payment_id
    } )


    if(data){

      const user1 = await userModel.findOne({ userEmail:email});
      if(user1){
        console.log(user1)
        
        // console.log(typeof user1.aviaibleBalance)
        // console.log(typeof totalprice)
          const val=parseInt(totalprice, 10)
          const finalBal=user1.aviaibleBalance+val
      const filter= {userEmail:email};
      const update={
        aviaibleBalance:finalBal
      }
  
  
     const updatedData= await userModel.findOneAndUpdate(filter,update,{new:true});
     console.log(updatedData)
      }
     


      
      
      const errorc="ORDER SUCCESSFULL"
      res.redirect(
        `http://localhost:3000/paymentsuccessfull?reference=${razorpay_payment_id}&message=${errorc}`
      );
    }else {
      console.log("error in saving data ")
      const errorc="SORRY ! ORDER SUCCESSFULL BUT PLEASE KEEP REFERENCE NO. FOR VERIFICATION"
      res.redirect(
        `http://localhost:3000/paymentsuccessfull?reference=${razorpay_payment_id}&message=${errorc}`
      )
    }
   
  
  } else {
    const errorc="TRANSITION FAILED"
    const refid="000000000000";
    res.redirect(
      `http://localhost:3000/paymentsuccessfull?reference=${refid}&message=${errorc}`
    )
    // res.json({
    //   success: false,
    // });
  }
})

module.exports=router;

