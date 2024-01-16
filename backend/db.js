
const mongoose=require('mongoose')


const mongoURL="mongodb+srv://temprory:Ay8299891902@clustor1.oj3lodp.mongodb.net/?retryWrites=true&w=majority"
// ,{useNewUrlParser:true ,useUnifiedTopology: true,bufferCommands: false}  if body parser dont work
   mongoose.connect(mongoURL)
var connection=mongoose.connection;
connection.on('error' , ()=>{
   console.log(" error ")
})
connection.on('connected' , ()=>{
   console.log("database is connected ")
})
module.exports =mongoose;

