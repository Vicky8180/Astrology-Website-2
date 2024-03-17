import { useEffect, useState } from "react";
import "./login.scss";
import axios from "axios"
import {  useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import {isAuth} from "../../action/index"
 const Login = () => {
  
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [data,setData]=useState();

 const navigate= useNavigate()
 
const dispatch= useDispatch()
const login=async(e)=>{
  e.preventDefault()
// console.log(email)
const config = {
  headers: {
    "Content-Type": "application/json"
    },
    withCredentials: true
  }


  const data = await axios.post(`${process.env.REACT_APP_BASE_URL_PORT}/api/login`,{

    adminEmail:email,
    password:password

   },config)
   console.log(data.data.success)
   setData(data);
   dispatch(isAuth(data.data.success))



  if(data.data.success){
    navigate('/admin')
  }else {
    alert("Invalid email or password")
  }

}

const forgot=()=>{
  navigate('/admin/login/forgot')
}

 const emailhandle=(e)=>{
  
setEmail(e.target.value);

 }

 const passwordhandle=(e)=>{
  
  setPassword(e.target.value);
   }
 
   console.log(document.cookie)
   
  return (
    <div className="login-container">
      <div className="login-content">
        <h2>Sign In</h2>

        <form>
          <label>Email:</label>
          <input type="text" placeholder="email"  value={email}  onChange={emailhandle} />

          <label>Password:</label>
          <input type="password" placeholder="password" value={password}  onChange={passwordhandle} />

          <button onClick={login} >Submit</button>
        </form>
        <button onClick={forgot} className="forgot-password">Forgot password</button>
      </div>
    </div>
  );
};

export default Login;

