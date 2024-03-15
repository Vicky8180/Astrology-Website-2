const mongoose = require('mongoose')


const UserSchema= new mongoose.Schema({


    userName:{
        type:String,
        required:true
    }
    ,
    userEmail:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
  
    // phone:{
    //     type:Number,
    //     unique:true,
    // },
     transitions:[{
        type:String,
        
     }],
     chathistory:{
        type:String,
        
     },
     order:{
        type:String,
      
     },
     aviaibleBalance:{
        type:Number,
        default:20
       
     }



})


const UserModel= new mongoose.model('user',UserSchema);

module.exports =  UserModel;