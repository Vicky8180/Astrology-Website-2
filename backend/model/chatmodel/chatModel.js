
const mongoose= require("mongoose");


const chatSchema= new mongoose.Schema({

chatName:{
    type:String,
    unique:true,
    required:true
},
users:[{
    type:mongoose.Schema.Types.ObjectId,
    required:true
}],

timeStamps:Date


})

const ChatModel= mongoose.model("chat",chatSchema);
module.exports=ChatModel;