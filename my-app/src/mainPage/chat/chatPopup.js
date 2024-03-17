import React, { useState, useEffect } from 'react';
import './chatPopup.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const WaitMessage = ({ onConfirm }) => {
  const [isVisible, setIsVisible] = useState(false);
 const naviagte= useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleConfirm = (response) => {
    if(response===false){
        naviagte("/loginuser")
    }
    setIsVisible(false);
    onConfirm(response);
  };

  return (
    <div className={`wait-message ${isVisible ? 'visible' : ''}`}>
      <p>Sorry, we currently do not have any astrologers available.</p>
      <p>Are you still willing to wait?</p>
      <p>Waiting will deduct balance</p>

      <div className="buttons">
        <button onClick={() => handleConfirm(true)}>Yes</button>
        <button onClick={() => handleConfirm(false)}>No</button>
      </div>
    </div>
  );
};

export default WaitMessage;
