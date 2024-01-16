// import React, { useEffect, useState } from "react";
// import "./ChatCss.css";
// import io from "socket.io-client";
// import { useDispatch, useSelector } from "react-redux";
// import { messageArray,chatData , stopChatx2} from "../../action";
// import axios from "axios";
// export default function InputChat() {
//   const [textmessage, setTextmessage] = useState();
// const chatdata = useSelector((state)=>state.chatData)
// const userdata = useSelector((state)=>state.userData)
// const stopchatx2=useSelector((state)=>state.stopChatx2)
// console.log(stopchatx2)
// const dispatch =useDispatch();
//   // making live chat sharingg
//   useEffect(() => {
//     const userSocket = io("http://localhost:5000/chatuser");
//     userSocket.emit("sendMessage", "Message sent from user");
//     userSocket.on("receiveMessage", (data) => {
//       console.log("Received message from server:", data);
//     });

//     return () => {
//       userSocket.disconnect();
//     };
//   }, []);
 

// // 

// // message is sending from here 
//   const sendMessage = async () => {
//     var currentTime = new Date();

//     // Format the time for display
//     var formattedTime = currentTime.toISOString().slice(0, -5) + "Z"
//     // dispatch(stopChatx2(true));
//     console.log(formattedTime)
//     var item = {};
//     item.textContent = textmessage;
//     item.sender = userdata[0].data._id;
//     item.timestamp=formattedTime
//     dispatch(messageArray([item]));
   
//  const res=  await axios.post("http://localhost:5000/api/messages", {
//       chat:chatdata[0][0]._id,
//       textContent: textmessage,
//       sender: userdata[0].data._id,
//     });

//     console.log(res)
//   };
   

// // console.log(chatdata[0][0]._id)

//   const fetchData2 = async (chatId) => {
//     try {
//       // dispatch(stopChatx2(true));
//       console.log("Chat ID:", chatId);
//       const response = await axios.get(`http://localhost:5000/api/getmessages?chatId=${chatId}`);
//       console.log("API Response:", response.data);
//       dispatch(messageArray(response.data.data));
//     } catch (error) {
//       console.error("Error fetching messages:", error);
//     }
//   };


//   useEffect(()=>{

//     if(!stopchatx2){
//       if(stopchatx2===false){
//         const temp=chatdata[0];
//        console.log(temp[0]._id)
//         fetchData2(temp[0]._id);
//       }
//     }
//     return () => {
//       dispatch(stopChatx2(true)); // Assuming you want to stop something on unmount
//     };
//   },[])
 

  
//   return (
//     <>
//       <div className="inputchat">
//         <input
//           type="text"
//           value={textmessage}
//           onChange={(e) => setTextmessage(e.target.value)}
//         />
//         <button onClick={sendMessage}>send</button>
//       </div>
//     </>
//   );
// }



import React, { useEffect, useState } from "react";
import "./ChatCss.css";
import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { messageArray, chatData, stopChatx2 } from "../../action";
import axios from "axios";

export default function InputChat() {
  const [textmessage, setTextmessage] = useState();
  const chatdata = useSelector((state) => state.chatData);
  const userdata = useSelector((state) => state.userData);
  const stopchatx2 = useSelector((state) => state.stopChatx2);
  const dispatch = useDispatch();
  console.log(stopchatx2)
  useEffect(() => {
    const userSocket = io("http://localhost:5000/chatuser");
    userSocket.emit("sendMessage", "Message sent from user");
    userSocket.on("receiveMessage", (data) => {
      console.log("Received message from server:", data);
    });

    return () => {
      userSocket.disconnect();
    };
  }, []);

  const sendMessage = async () => {
    try {
      var currentTime = new Date();
      var formattedTime = currentTime.toISOString().slice(0, -5) + "Z";
      console.log(formattedTime);
      var item = {
        textContent: textmessage,
        sender: userdata[0].data._id,
        timestamp: formattedTime,
      };

      dispatch(messageArray([item]));

      const res = await axios.post("http://localhost:5000/api/messages", {
        chat: chatdata[0][0]._id,
        textContent: textmessage,
        sender: userdata[0].data._id,
      });

      console.log(res);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        if (!stopchatx2) {
          const temp = chatdata[0];
          console.log(temp[0]._id);
          const response = await axios.get(
            `http://localhost:5000/api/getmessages?chatId=${temp[0]._id}`
          );

          if (stopchatx2===false) {
            dispatch(messageArray(response.data.data));
          }
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

      fetchData();
      setTimeout(() => {
        dispatch(stopChatx2(true))
      }, 5000);
   

    return () => {
      isMounted = false; // Set to false when the component is unmounted
    };
  }, [chatdata]);

  return (
    <>
      <div className="inputchat">
        <input
          type="text"
          value={textmessage}
          onChange={(e) => setTextmessage(e.target.value)}
        />
        <button onClick={sendMessage}>send</button>
      </div>
    </>
  );
}


