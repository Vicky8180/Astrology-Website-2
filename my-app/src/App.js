import Forgot from "./components/forgot/Forgot";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import ChangePassword from "./components/forgot/ChangePassword";
import GetOtp from "./components/forgot/GetOtp";
import { useSelector } from "react-redux/es/hooks/useSelector";
import React from "react";
import ServiceList from "../src/pages/servicelist/ServiceList"
import ServiceForm from "../src/pages/serviceform/ServiceForm"
import Profile from "../src/pages/profile/Profile"
import About from "./mainPage/about/About"
import Product from "./mainPage/products/Product"
import HoroDetail from "./mainPage/horoDetails/HoroDetail"
import AboutProduct from "./mainPage/products/AboutProduct";
import FirstPage from "./FirstPage"
import UpdatePassword from "./pages/profile/UpdatePassword";
import Payment from "./mainPage/payment/Payment"
import PaymentSuccessfull from "./mainPage/payment/PaymentSuccessfull"
import EditProfile from "./pages/profile/Edit";
import Orders from "./pages/orders/Order"
import Loader from "./mainPage/Loader"
import ContactBhim from "./mainPage/contactBhim/contact"
import Blog from "./pages/blog/Blog"
import ChatAdmin from "./pages/adminchat/AdminChat";
import LoginUser from "./mainPage/login/LoginUser"
import Transition from "./mainPage/login/UserTransition"
import ChatUser from "./mainPage/login/UserChat"
import StarterLogin from "./mainPage/login/UserLogin/StarterLogin"
import SignUpOtp from "./mainPage/login/UserLogin/SignUpOtp"
import Recharge from "./mainPage/recharge/Recharge";

function App() {
  const { darkMode } = useContext(DarkModeContext);
 const isauth=useSelector((state)=>state.isAuth);
 const checkout= useSelector((state)=>state.checkoutServiceState);
 const userloggedIn=useSelector((state)=>state.userloggedIn);
 const ans=checkout.length;
 console.log(checkout)
 console.log(isauth)

 const userInputs = [
  {
    id: 1,
    label: "Horoscop name",
    type: "text",
    placeholder: "john_doe",
  },
  {
    id: 2,
    label: "Horoscope English",
    type: "text",
    placeholder: "John Doe",
  },
  {
    id: 3,
    label: "Email",
    type: "mail",
    placeholder: "john_doe@gmail.com",
  },
  {
    id: 4,
    label: "Horoscope Hindi",
    type: "text",
    placeholder: "+1 234 567 89",
  },
  {
    id: 5,
    label: "From Date",
    type: "Date",
  },
  {
    id: 6,
    label: "Written By:",
    type: "text",
    placeholder: "Elton St. 216 NewYork",
  },
  {
    id: 7,
    label: "To Date",
    type: "Date",
    placeholder: "USA",
  },
];




  return (
    <>
   
  <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>

          <Route exact path='/' element={<FirstPage/>}/>
          <Route path='/about'   element={ <About/>}/>
          <Route path='/contact'   element={ <ContactBhim/>}/>
          <Route path='/services'   element={ <Product/>}/>
          <Route path='/horodetail'   element={ <HoroDetail/>}/>
          <Route path='/aboutservices'   element={ <AboutProduct/>}/>
          <Route path='/paymentcheckout'   element={ ans> 0 ? <Payment/>:<Loader/>}/>
          <Route path='/paymentsuccessfull'   element={ <PaymentSuccessfull/>}/>
          <Route path='/loginuser'   element={ userloggedIn ? <LoginUser/> :<FirstPage />}/>
          <Route path='/transition'   element={ <Transition/>}/>
          <Route path='/chatuser'   element={ <ChatUser/>}/>
          <Route path='/starterlogin'   element={ <StarterLogin/>}/>
          <Route path='/signupotp'   element={ <SignUpOtp/>}/>
          <Route path='/recharge'   element={ <Recharge/>}/>


          <Route path="/admin">
            <Route index element={isauth ? <Home />:<Login/>} />
            <Route path="login" >
              <Route index  element={<Login />}/>
              <Route path="forgot"  element={<Forgot />} />
              <Route path="getotp" element={<GetOtp />} />
              <Route path="changepassword" element={<ChangePassword />} />
              </Route>
<Route    path='list' element={isauth ? <List/>:<Login/> } />
<Route    path='new' element={isauth ? <New   inputs={userInputs} title="Add New User"/>:<Login/> } />
<Route    path='servicelist' element={<ServiceList/> } />
<Route    path='serviceform' element={<ServiceForm/> } />
<Route    path='profile' element={<Profile/> } />
<Route    path='updatepassword' element={<UpdatePassword/> } />
<Route    path='editprofile' element={<EditProfile/> } />
<Route    path='order' element={<Orders/> } />
<Route    path='blog' element={<Blog/> } />
<Route    path='chat' element={<ChatAdmin/> } />
            </Route>
            

        </Routes>
      </BrowserRouter>
     
    </div>
    {/* <Single/> */}
    </>
  
  );
}

export default App;

