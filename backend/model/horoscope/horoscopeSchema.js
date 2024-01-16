const mongoose=require('mongoose')
const HoroscopeSchema=  new mongoose.Schema({
    image:{
        type: Buffer,
            // contentType: String,
            default:"https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg"

    },
    inEnglish:{
        type:String,
        required:true   
    },
    inHindi:{
        type: String,
        required:true,
    },
    fromdate:{
        type: Date, default: Date.now
    },
    todate:{
        type: Date, default: Date.now
    },
    horotype:{
        type: String, required:true,
    },
    writter:{
        type: String, required:true,
    }
    , email:{
        type: String, required:true,
    }
})


const HoroscopModel= new mongoose.model('horoscope',HoroscopeSchema);

module.exports =  HoroscopModel;