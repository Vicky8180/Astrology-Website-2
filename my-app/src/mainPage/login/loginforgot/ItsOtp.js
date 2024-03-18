import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function EmailOtpForm() {
  const [otp, setOtp] = useState("");
const email=useLocation()
// console.log(email.state.email)
  const handleEmailChange = (evt) => {
    setOtp(evt.target.value);
  };
  const navigate= useNavigate();
  const EMAIL=email.state.email

 

  const GoToSignUpOtp3 = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL_PORT}/api/otpmacting`,
        {
          adminEmail:email.state.email,
          otp: otp,
        }
      );

      console.log(response.data.success);
      if (response.data.success === true) {
       navigate("/newpassword", {state:EMAIL})
      } else {
        alert("Wrong OTP");
        // navigate("/starterlogin");
      }
    } catch (error) {
      alert("Network Issue");
      navigate("/starterlogin");
    }
  };

  return (
    <div
      style={{ width: "450px", margin: "0 auto", marginLeft: "35%" }}
      className="form-container sign-in-container"
    >
      <form >
        <h1>Valid OTP</h1>
        <input
          className="inputSignInUp"
          type="number"
          placeholder="Otp"
          value={otp}
          onChange={handleEmailChange}
          required
        />
        <button className="buttonSignInUp" onClick={(evt) => GoToSignUpOtp3(evt)}>
          Next
        </button>
      </form>
    </div>
  );
}

export default EmailOtpForm;
