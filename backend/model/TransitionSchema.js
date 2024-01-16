const mongoose = require('mongoose')


const TransitionSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    }
    ,
    address:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },  
    phone:{
        type:Number,
        unique:true,
    },
    zipcode:{
        type:Number,
        require:true
    }
, totalprice:{
    type:Number,
    required:true
},
service:{
    type:String,
    required:true
 
},
duration:{
    type:Number,
    required:true,
    default:15
 
},
transitionId:{
    type:String,
    required:true
},
timestamp:{
    type:Date,
    require:true,
    default:Date.now()
}

})


const TransitionModel= new mongoose.model('transition',TransitionSchema);

module.exports =  TransitionModel;