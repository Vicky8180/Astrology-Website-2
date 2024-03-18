import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useLocation } from "react-router-dom";
function NewPassForm() {
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");

  const handleP1Change = (evt) => {
    setP1(evt.target.value);
  };

  const DATA=useLocation()
  console.log(DATA.state)
  const handleP2Change = (evt) => {
    setP2(evt.target.value);
  };
  const navigate= useNavigate();
  const SubmmitIt=async(evt)=>{
    evt.preventDefault();
    console.log("here1")
    try {
      
      const response= await axios.post(`${process.env.REACT_APP_BASE_URL_PORT}/api/confirmpassworduser`,{
        pass1:p1, pass2:p2, userEmail:DATA.state
         })
         console.log(response)
         if(response.data.success){
          alert("Password Updated")
          navigate('/starterlogin' )
         }else {
          alert(response.message)
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
          type="text"
          placeholder="New Password"
          value={p1}
          onChange={handleP1Change}
          required
        />
          <input
          className="inputSignInUp"
          type="text"
          placeholder="Confirm Password"
          value={p2}
          onChange={handleP2Change}
          required
        />
        <button className="buttonSignInUp" onClick={(evt) => SubmmitIt(evt)} >
          Next
        </button>
      </form>
    </div>
  );
}

export default NewPassForm
