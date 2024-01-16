import React, { useState } from 'react'
import "./forgot.css"
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ChangePassword() {
    const navigate= useNavigate();
  const location = useLocation()
  // const qurey= new URLSearchParams(location.search);
  // const email= qurey.get('param1')
  const email=location.state.email
  console.log(email)
  const [pass1, setPass1]= useState();
  const [pass2, setPass2]= useState();

  const updatePassword=async()=>{

    const data= await axios.post('http://localhost:5000/api/updateforgot',{
pass1:pass1,
pass2:pass2,
adminEmail:email

    })
    if(data.data.success){
    alert("your password has updated ")
    navigate("/")
    }
  }

const pass1Handle=(e)=>{
  setPass1(e.target.value);
}

const pass2Handle=(e)=>{
  setPass2(e.target.value);
}


  return (
   <>
<div className='main-page'>

<div className='content-area'>
<h2>Account Recovery</h2>
<p> To help keep your account safe, Google wants to make sure it’s really you trying to sign in</p>

<div className='input-area'>
    <label>New Password</label>
    <input placeholder='password' type="text" value={pass1} onChange={pass1Handle} />
    <label>Confirm Password</label>
    <input placeholder='password' type="text" value={pass2} onChange={pass2Handle}/>
</div>
<button onClick={updatePassword}>Finish</button>
</div>

</div>

   </>
  )
}
