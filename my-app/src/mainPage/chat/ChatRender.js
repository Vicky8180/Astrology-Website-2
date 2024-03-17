import React from 'react';
import './ChatCss.css';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import ChatPopUp from "./chatPopup"

export default function ChatRender() {

  const message=useSelector((state)=>state.messageArray);
  const userData=useSelector((state)=>state.userData)
  const newArray = message.map((obj) => {
   var dateString = obj.timestamp;
var dateTime = new Date(dateString);
const timeget=dateTime.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true, hour: 'numeric', minute: 'numeric' })

    obj.time=timeget
    if (obj.sender === userData[0].data._id) {
      
      return { ...obj, provider:   "receiver"  };
    } else {
    
      return { ...obj, provider: "sender"};
    }
  })
console.log(message)
  return (
    <>
      <div className="chatrendertop"> 
      <div className="chatrender">
    
    {newArray.map((item, index) => (

      <div key={index} className={`message ${item.provider}`}>
        <p className="text">{item.textContent}   <span className='messagetime'>{item.time}</span> </p>
       
      </div>
    ))}
  </div>
  <ChatPopUp/>
      </div>
    
    </>
  );
}
