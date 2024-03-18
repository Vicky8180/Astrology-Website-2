import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
function EmailInputForm() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };
  const navigate= useNavigate();
  const GoToSignUpOtp2=async(evt)=>{
    evt.preventDefault();
    try {
      
      const response= await axios.post(`${process.env.REACT_APP_BASE_URL_PORT}/api/generateotp`,{
          userEmail:email
         })
         console.log(response)
         if(response.data.success){
          navigate('/otpverification', {state:{email}} )
         }else {
          alert("Not valid email!")
         }
      
        
    } catch (error) {
        alert("Network issue please try after some time ")
      
    } 
    }

  return (
    <div   style={{ width: "450px", margin: "0 auto", marginLeft:"35%" }} className="form-container sign-in-container">
      <form >
        <h1>Enter Email</h1>
        <input
          className="inputSignInUp"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button className="buttonSignInUp" onClick={(evt) => GoToSignUpOtp2(evt)} >
          Next
        </button>
      </form>
    </div>
  );
}

export default EmailInputForm;
