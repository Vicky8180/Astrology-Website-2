// import React, { useEffect,useState } from 'react'
// import ChatRender from './ChatRender'
// import TimeLeft from './TimeLeft'
// import InputChat from './InputChat'
// import "./ChatCss.css"
// import axios from 'axios'
// import { messageArray, chatData } from '../../action'
// import {useSelector } from 'react-redux/es/hooks/useSelector'
// import { useDispatch } from 'react-redux'
// export default function Chat() {
// const dispatch=useDispatch();
// const [chatdata, setChatData] = useState();
// const userData = useSelector((state) => state.userData);
//   //chat is getting created here 
//   useEffect(() => {
//     const fetch = async () => {
//       const response = await axios.post(
//         "http://localhost:5000/api/chatcreated",
//         {
//           chatName: userData[0].data.userEmail,
//           users: [userData[0].data._id, "65872860503fbc9ac01609b9"],
//         }
//       );
//      dispatch(chatData(response.data.data))
//     //  console.log(response)
//     setChatData(response.data.data)
//     };
//     fetch();
//     fetchData2();
//   }, []);

//   console.log(chatdata)



  
//     const fetchData2 = async () => {
//       try {
//         console.log("Chat ID:", chatdata[0]._id);
//         const response = await axios.get(`http://localhost:5000/api/getmessages?chatId=${chatdata[0]._id}`);
//         console.log("API Response:", response.data);
//         dispatch(messageArray(response.data.data));
//       } catch (error) {
//         console.error("Error fetching messages:", error);
//       }
//     };
  
   

//   return (
//    <>
//     <div className='chat'>
//     <div className='astrologername'>
//      <div> <h3> Name of Pandit ji</h3>   </div>
//      <div> Online  </div>
//      </div>

// <div><TimeLeft/>
// <ChatRender/>
// <InputChat/></div>

//     </div>
//    </>
//   )
// }





// import React, { useEffect, useState } from 'react';
// import ChatRender from './ChatRender';
// import TimeLeft from './TimeLeft';
// import InputChat from './InputChat';
// import "./ChatCss.css";
// import axios from 'axios';
// import { messageArray, chatData, stopChatx2, timeLeft  } from '../../action';
// import { useSelector } from 'react-redux/es/hooks/useSelector';
// import { useDispatch } from 'react-redux';
// import FirstRechargePlease from './FirstRechargePlease';
// export default function Chat() {
//   const dispatch = useDispatch();
//   const [chatdata, setChatData] = useState(null); 
//   const userData = useSelector((state) => state.userData);
 
//   useEffect(() => {
//     const fetch = async () => {
//       try {
//         const response = await axios.post(
//           "http://localhost:5000/api/chatcreated",
//           {
//             chatName: userData[0].data.userEmail,
//             users: [userData[0].data._id, "65872860503fbc9ac01609b9"],
//           }
//         );

//         dispatch(chatData(response.data.data));
//         console.log(response.data.data)
//         setChatData(response.data.data);

      
//       } catch (error) {
//         console.error("Error creating chat:", error);
//       }
//     };
//     fetch();
//   }, []);


//   const aviaibleBalance= useSelector((state)=>state.userData)
//   // console.log(aviaibleBalance[0].data.aviaibleBalance );

// const initialTime=Math.round((aviaibleBalance[0].data.aviaibleBalance))/10;

// const [timeLeft1, setTimeLeft] = useState(initialTime * 60); 

// useEffect(() => {
//   const timer = setInterval(() => {
//     if (timeLeft1 > 0) {
//       setTimeLeft((prevTime) => prevTime - 1);
//     } else {
//       clearInterval(timer);
//     }
//   }, 1000); 

//   return () => {
//     clearInterval(timer);
//   };
// }, [timeLeft1]);

// const formatTime = (seconds) => {
//   const minutes = Math.floor(seconds / 60);
//   const remainingSeconds = seconds % 60;
//   return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
// };
  

// dispatch(timeLeft(formatTime(timeLeft1)))






// function timeToSeconds(time) {
//   const [hours, minutes] = time.split(':').map(Number);
//   return (hours * 3600) + (minutes * 60);
// }
// console.log(timeToSeconds(formatTime(timeLeft1)) )



// const updateUserAmount=async()=>{
//   console.log(timeToSeconds(formatTime(timeLeft1)) )
//     const t1=timeLeft1*0.166666667
//       console.log(timeLeft1)

//       const response2 = await axios.put("http://localhost:5000/api/updateuseramount",{
//         userEmail:userData[0].data.userEmail,
//         aviaibleBalance:t1.toFixed(2)
//       })

//       console.log(response2)
// }


// useEffect(() => {
//   const updateAmountInterval = setInterval(() => {
//     updateUserAmount();
//   }, 40000);

//   return () => {
//     clearInterval(updateAmountInterval);
//   };
// }, []); // Empty dependency array to ensure it runs only once after initial render

// // Rest of your code...

//   return (
//     <>
//       <div className='chat'>
//         <div className='astrologername'>
//           <div><h3>{userData[0].data.userName}</h3></div>
//           <div>Online</div>
//         </div>
//         <div>
//           <TimeLeft  timeLeft12={formatTime(timeLeft1)} />

//           {timeToSeconds(formatTime(timeLeft1)) > 0 ? <ChatRender /> : <FirstRechargePlease/> }
//         { timeToSeconds(formatTime(timeLeft1))  > 0 ?   <InputChat /> : <></>}
        
//         </div>
//       </div>
//     </>
//   );
// }





import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { chatData, timeLeft } from '../../action';
import ChatRender from './ChatRender';
import TimeLeft from './TimeLeft';
import InputChat from './InputChat';
import FirstRechargePlease from './FirstRechargePlease';

export default function Chat() {
  const dispatch = useDispatch();
  const [initialTime, setInitialTime] = useState(0);
  const [timeLeft1, setTimeLeft1] = useState(0);
  const userData = useSelector((state) => state.userData);
  const availbleBalance1=useSelector((state)=>state.aviaibleBalance)
  console.log(availbleBalance1)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/chatcreated",
          {
            chatName: userData[0].data.userEmail,
            users: [userData[0].data._id, "65872860503fbc9ac01609b9"],
          }
        );

        dispatch(chatData(response.data.data));
        console.log(response.data.data);
        // const initialBalance = Math.round(userData[0].data.aviaibleBalance);
        const initialBalance = availbleBalance1
        setInitialTime(initialBalance / 10 * 60);
        setTimeLeft1(initialBalance / 10 * 60);
      } catch (error) {
        console.error("Error creating chat:", error);
      }
    };

    fetchData();
  }, [userData, dispatch]);

  // useEffect(() => {
  //   const updateAmountInterval = setInterval(() => {
  //     updateUserAmount();
  //   }, 40000);

  //   return () => {
  //     clearInterval(updateAmountInterval);
  //   };
  // }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft1 > 0) {
        setTimeLeft1((prevTime) => prevTime - 1);
        dispatch(timeLeft(formatTime(timeLeft1))); // Dispatch timeLeft action here
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft1, dispatch]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  function timeToSeconds(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return (hours * 3600) + (minutes * 60);
  }
  

  
  // const updateUserAmount = async () => {
  //   const t1 = initialTime * 0.166666667;
  //   console.log(t1);
  //   try {
  //     const response2 = await axios.put("http://localhost:5000/api/updateuseramount", {
  //       userEmail: userData[0].data.userEmail,
  //       aviaibleBalance: t1.toFixed(2),
  //     });

  //     console.log(response2);
  //   } catch (error) {
  //     console.error("Error updating user amount:", error);
  //   }
  // };

  return (
    <>
      <div className='chat'>
        <div className='astrologername'>
          <div><h3>{userData[0].data.userName}</h3></div>
          <div>Online</div>
        </div>
        <div>
          <TimeLeft timeLeft12={formatTime(timeLeft1)} />

          {timeToSeconds(formatTime(timeLeft1)) > 0 ? <ChatRender /> : <FirstRechargePlease />}
          {timeToSeconds(formatTime(timeLeft1)) > 0 ? <InputChat /> : <></>}
        </div>
      </div>
    </>
  );
}

