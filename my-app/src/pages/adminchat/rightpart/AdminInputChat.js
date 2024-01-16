import React,{useEffect} from 'react'
import "./AdminChatCss.css"
import io from "socket.io-client";
export default function InputChat() {

  useEffect(() => {
    // Creating a socket connection to the "/chatuser" namespace
    const userSocket = io('http://localhost:5000/admin/chat');

    // Emitting the message after the connection is established
    userSocket.emit('sendMessage', 'Message sent from admin');
    userSocket.on('receiveMessage', (data) => {
      console.log('Received message from server:', data);
    });
    // Cleanup the socket connection when the component unmounts
    return () => {
      userSocket.disconnect();
    };
  }, []);


  

  return (
   <>
    <div className='admininputchat'>
        <input type='text' />
        <button>send</button>
    </div>
   </>
  )
}
