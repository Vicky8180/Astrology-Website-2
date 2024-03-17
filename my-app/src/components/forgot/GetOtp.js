import React, { useState } from 'react'
import "./forgot.css"
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import OtpInput from 'react-otp-input';
export default function GetOtp() {

    const navigate= useNavigate();
   const location= useLocation();
const email=location.state.email
console.log()
    const [otp,setOtp]=useState(); 
 console.log(otp)
 const getOtp=async()=>{

    const data= await axios.post(`${process.env.REACT_APP_BASE_URL_PORT}/api/otpmacting`,{
        otp:otp,
        adminEmail:email
    })
    console.log(data)
    if(data.data.success){
        navigate("/admin/login/changepassword", {state:{email}})
    }else {
        alert(data.data.message)
    }
 }


 const otpHandle=(e)=>{
    setOtp(e.target.value);

 }
  return (
 <>
    <div className='main-page'>

    <div className='content-area'>
<h2>Account Recovery</h2>
<p> To help keep your account safe, Google wants to make sure it’s really you trying to sign in</p>
    
    {/* <div className='input-area'>
        <label>Enter otp</label>
        <input placeholder='otp' type="text"  value={otp} onChange={otpHandle}/>
    </div>
    <button onClick={getOtp}>Next</button> */}
  <h4>Enter Otp</h4>
    <div className='otpBox'>
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span>- </span>}
      renderInput={(props) => <input {...props} />}
      
    />
    </div>
    
     <button onClick={getOtp}>Next</button>
    </div>

    </div>
 </>
  )
}
