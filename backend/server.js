
const express = require('express')
const db= require("./db")
const cors = require('cors')
const app=express();
const cookieParser = require("cookie-parser");
const Razorpay = require("razorpay");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const socketIo = require("socket.io");
const http = require('http');
// const server = http.createServer(app);
const path = require("path");

dotenv.config();


 const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });
module.exports=instance;
const CreateRoute = require('./router/CreateRoute')
const LoginRoute= require("./router/Login")
const ForgotRoute= require("./router/Forgot")
const OtpmactingRoute= require("./router/otpMatching")
const ForgotUpdate= require("./router/UpdateForgot")
const HoroPost = require("./router/Horoscope/HoroPost")
const CreateService = require("./router/Services/CreateService")
const UpdateService = require("./router/Services/UpdateService")
const DeleteService = require("./router/Services/DeleteService")
const ReadService = require("./router/Services/ReadServices")
const HoroGet = require("./router/Horoscope/HoroGet")
const Checkout = require("./router/Razorpay/CheckOut")
const PaymentVerification = require("./router/Razorpay/Paymentverification")
const EditAdmin = require("./router/EditAdmin")
const TransitionMake = require("./router/transition/TransitionMake")
const GetTransition= require("./router/transition/GetTransition")
const ForgotForUser = require("./router/UserLogin/ForgotForUser")
const CreateUser = require("./router/UserLogin/CreateUser")
const UserLogin = require("./router/UserLogin/UserLogin")
const CreateChat = require("./router/chat/Chat")
const SaveMessages = require("./router/chat/Message")
const GetMessages = require("./router/chat/GetMessage")
const UpdateUserAmount = require("./router/UserLogin/UpdateAmount")
const Getindividualtrans = require("./router/transition/GetIndividualTrans")
const PasswordConfirm = require("./router/PasswordConfirmUser")
const GenerateOtp = require("./router/UserLogin/genrateotp")
app.use(cors({
    // origin: 'http://localhost:3000',
 origin :'https://astrologywithanoop.netlify.app/',
    credentials: true,
    
}));


////////////////////////////////
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('uploads'))
/////////////////////////////////////
app.use('/api',CreateRoute);
app.use('/api',LoginRoute);
app.use('/api',ForgotRoute);
app.use('/api',OtpmactingRoute);
app.use('/api',ForgotUpdate);
app.use('/api',HoroPost);
app.use('/api',CreateService);
app.use('/api',UpdateService);
app.use('/api',DeleteService);
app.use('/api',ReadService);
app.use('/api', HoroGet);
app.use('/api', Checkout);
app.use('/api', EditAdmin);
app.use('/api', TransitionMake);
app.use('/api', GetTransition);
app.use('/api', ForgotForUser);
app.use('/api', CreateUser);
app.use('/api', UserLogin);
app.use('/api', CreateChat);
app.use('/api', SaveMessages);
app.use('/api', GetMessages);
app.use('/api', UpdateUserAmount);
app.use('/api', Getindividualtrans);
app.use('/api', PasswordConfirm);
app.use('/api', GenerateOtp);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

app.use('/api', PaymentVerification);



// app.use(express.static(buildpath));

// Define a wildcard route handler to serve the main HTML file for all routes
// app.get('/', (req, res) => {
//   res.sendFile(path.join(buildpath, 'index.html'));
// });


const _dirname = path.dirname("");
const buildpath = path.join(_dirname, "../my-app/build");
app.use(express.static(buildpath));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../my-app/build', 'index.html'));
});

const server=app.listen(process.env.PORT || 5000,()=>{
    console.log("its running ")
})


















const io = socketIo(server, {
  cors: {
    // origin: `http://localhost:3000`,
       origin: 'https://astrologywithanoop.netlify.app/',
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});





// User namespace

const userNamespace = io.of('/chatuser');
userNamespace.on('connection', (socket) => {
  console.log('User connected to the chatuser namespace');

  socket.on('sendMessage', (data) => {
    // Handle user messages
    console.log('Received message from user:', data);
     socket.emit("receiveMessage", "hello from anoop server");
    // Broadcast the message to admins in the admin room
    io.of('/admin/chat').in('adminRoom').emit('receiveMessage', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected from the chatuser namespace');
  });
});






// Admin namespace
const adminNamespace = io.of('/admin/chat');
adminNamespace.on('connection', (socket) => {
  console.log('Admin connected');

  socket.on('sendMessage', (data) => {
    // Handle admin messages
    console.log('Received message from admin:', data);

    // Broadcast the message to users
    userNamespace.emit('receiveMessage', data);
  });

  socket.on('disconnect', () => {
    console.log('Admin disconnected');
  });
});
