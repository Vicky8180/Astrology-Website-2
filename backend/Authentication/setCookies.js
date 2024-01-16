const dotenv= require("dotenv")
const jwt= require("jsonwebtoken");

// dotenv.config();


// const settingCookies=(data,res,message)=>{
//   // console.log(data._id)
//   const generateToken= jwt.sign({id:data._id.toString()},process.env.SECRET_KEY);
//   console.log("2")

//   res.cookie("token", generateToken, {
//     httpOnly: true,
//     maxAge: 1000 * 60 * 15,
//   });
//   return res.json({
//     data: data,
//     success: true,
//     message: message,
//   });

//   // return res.cookie("token",generateToken,{
//   //   httpOnly:true,
//   //   maxAge:1000*60*15
//   // })
//   // .json({
//   //   data:data,
//   //   success:true,
//   //   message:message
//   // })

// }

// module.exports=settingCookies;


// import dotenv from "dotenv";
// import  jwt  from "jsonwebtoken";


dotenv.config();

const setCookies=(data, res,message )=>{
  console.log("1")
    const token = jwt.sign({id:data._id.toString()},process.env.SECRET_KEY);
    console.log("2")
    return res.status(200).cookie("token", token, {
      httpOnly:true,
      maxAge:1000*60*15,
    
    }).json({data:data,
      success:true,
      message});
    

}

// export default setCookies;

module.exports=setCookies;