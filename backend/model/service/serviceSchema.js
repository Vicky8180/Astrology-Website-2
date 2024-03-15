const mongoose = require('mongoose')


const ServiceSchema= new mongoose.Schema({

    image:{
        type: String,
            default:"https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg"

    },
    serviceName:{
        type:String,
        required:true
    }
    ,
    serviceDescription:{
        type:String,
        required:true,
      
    },
    serviceDetail:[{
        type:String,
        required:true
    }],
    pricePerMinute:{
        type:Number,
        require:true,
    },rating:{
        type:Number,
        require:true,
    }



})


const ServiceModel= new mongoose.model('services',ServiceSchema);

module.exports =  ServiceModel;