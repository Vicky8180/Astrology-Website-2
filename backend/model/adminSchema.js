const mongoose = require('mongoose')


const AdminSchema= new mongoose.Schema({


    about:{
        type:String,
        required:true
    },

    adminName:{
        type:String,
        required:true
    }
    ,
    adminEmail:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    instagram:{
        type:String,
        required:true
    },
    facebook:{
        type:String,
        required:true
    },
    youtube:{
        type:String,
        required:true
    },
    whatsapp:{
        type:Number,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    street:{
        type:String,
        required:true
    },
    image:{
        type: String,
            default:"https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg"

    },
    phone:{
        type:Number,
        unique:true,
    },
    zipcode:{
        type:Number,
        require:true
    }



})


const AdminModel= new mongoose.model('admin',AdminSchema);

module.exports =  AdminModel;