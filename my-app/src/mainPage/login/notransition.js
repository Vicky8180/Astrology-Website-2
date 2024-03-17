import React from 'react';
import './NoTransitionYet.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
const NoTransitionYet = () => {
   const navigate =      useNavigate()
    const GoToRecharge=()=>{
    navigate("/recharge")
    }
  return (
    <div className="no-transition-container">
      <div className="message_1212">No transition done yet !</div>
      <button className='button_no' onClick={GoToRecharge}>Make one</button>
      
    </div>
  );
}

export default NoTransitionYet;
