import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {userloggedIn, userData, availbleBalance} from "../../../action/index"
function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });
  const dispatch =useDispatch();
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };
  const navigate= useNavigate();

  const handleOnSubmit = async(evt) => {
    evt.preventDefault();

    const { email, password } = state;
  
    const response= await axios.post(`${process.env.REACT_APP_BASE_URL_PORT}/api/userlogin`,{

      email:email,
      password:password
    })
    console.log(response)
    // dispatch(availbleBalance(response.data.data.aviaibleBalance))
    if(response.data.success == true){
      dispatch(availbleBalance(response.data.data.aviaibleBalance))
      alert(`You are login with email: ${email}`);
      dispatch(userloggedIn(true));
      dispatch(userData(response.data));
      navigate("/loginuser")
    } else {
      alert("Wrong credentials")
    }

      

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form >
        <h1>Sign in</h1>
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
        <span>or use your account</span>
        <input
        className="inputSignInUp"
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
        className="inputSignInUp"
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a className="aSignInUp" href="#">Forgot your password?</a>
        <button className="buttonSignInUp" onClick={handleOnSubmit}>Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
