import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { name, email, password } = state;
   

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };
  const navigate= useNavigate();
 

  const GoToSignUpOtp=async()=>{
  var response
  try {
    if(state.email!=="" && state.name!=="" && state.password!==""){
      response= await axios.post(`${process.env.REACT_APP_BASE_URL_PORT}/api/forgotforuser`,{
        userEmail:state.email
       })
       if(response.data.success){
        navigate('/signupotp' , {state:{state}})
       }else {
        alert("Not valid email!")
       }
    }else {
      alert("Please fill all fields")
    }
      
  } catch (error) {
    
  }




   
  }
  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
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
        <span>or use your email for registration</span>
        <input
        className="inputSignInUp"
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
        className="inputSignInUp"
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
        className="inputSignInUp"
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button className="buttonSignInUp" onClick={GoToSignUpOtp}>Next</button>
      </form>
    </div>
  );
}

export default SignUpForm;
