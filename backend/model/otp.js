const mongoose = require('mongoose')


const otpSchema= new mongoose.Schema({

    adminEmail:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
        required:true   
    },
    expireIn:{
        type: Date, default: Date.now
    }

})

const otpModel = new mongoose.model('otp',otpSchema)

module.exports= otpModel