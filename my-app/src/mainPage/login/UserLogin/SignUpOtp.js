import React, { useState } from "react";
import "./SingInUp.css";
import SignInForm from "./SignIn";
import { useLocation } from "react-router-dom";
import axios from "axios"
import { useNavigate } from "react-router-dom";
export default function StarterLogin() {

  const data=useLocation();
 
  const [otp, setOtp]=useState();

  const handleChange=(e)=>{
      setOtp(e.target.value);
  }
  const navigate= useNavigate();
const OtpMatch=async(e)=>{
  e.preventDefault(); 
         try {
          const response= await axios.post("http://localhost:5000/api/otpmacting",{
             adminEmail:data.state.state.email,
             otp:otp
          })
         
          console.log(response.data.success)
          if(response.data.success===true){

            try {
              const response2= await axios.post("http://localhost:5000/api/createuser",{
                userEmail:data.state.state.email,
                userName:data.state.state.name,
                password:data.state.state.password
              })
             console.log(response2)
              if(response2){
               alert("Login now");
               navigate("/starterlogin")
              }else {
                alert("please try again!");
                navigate("/starterlogin")
              }
            } catch (error) {
              console.log("Already you are user")
              alert("please try again!");
              navigate("/starterlogin")
            }
          

          
          }else {
            alert("issue in sign-up")
            navigate("/starterlogin")
          }
        



         } catch (error) {
          alert("issue in sign-up")
          navigate("/starterlogin")

         }




}




  const [type, setType] = useState("signUp");

  const containerClass =
    
    "containerSignInUp " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="App">
      <h2>Sign in/up Form</h2>
      <div className={containerClass} id="container">
      <div className="form-container sign-up-container">
      <form >
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>don't go back, verify otp to signup</span>
   
        <input
        className="inputSignInUp"
          type="number"
          name="otp"
          value={otp}
          onChange={handleChange}
          placeholder="Otp"
        />
      
        <button className="buttonSignInUp"  onClick={OtpMatch}>Sign Up</button>
      </form>
    </div>

        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
             
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
