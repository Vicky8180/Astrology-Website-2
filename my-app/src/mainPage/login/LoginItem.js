import React from 'react'
import "./loginuser.css"
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux/es/hooks/useSelector';
export default function LoginItem() {

    const navigate= useNavigate();
    const GoToTransition=()=>{
     navigate('/transition')
    }
    const GoToChat=()=>{
        navigate('/chatuser')
       }
       const RecharageHandle=()=>{
        navigate('/recharge')
       }
       const aviaibleBalance1= useSelector((state)=>state.aviaibleBalance)

  return (
   <>
    <div className='loginuser'>
<div className='loginuseritem' onClick={GoToTransition}> <h4>Transition</h4></div>
<div className='loginuseritem' onClick={GoToChat}><h4>Chat</h4></div>
<div className='loginuseritem1'>
    <h4> Availble balance</h4>
    <p>{aviaibleBalance1} Rs.</p>
</div>
<div  onClick={RecharageHandle}  className='loginuseritem1'> 
<h4>Recharge Now </h4>
<p>Click</p>
</div>
    </div>
   </>
  )
}
