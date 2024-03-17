
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
          `${process.env.REACT_APP_BASE_URL_PORT}/api/chatcreated`,
          {
            chatName: userData[0].data.userEmail,
            users: [userData[0].data._id, "65872860503fbc9ac01609b9"],
          }
        );

        dispatch(chatData(response.data.data));
        console.log(response.data.data);
        
        const initialBalance = availbleBalance1
        
         
        setInitialTime(initialBalance / 10 * 60);
        setTimeLeft1(initialBalance / 10 * 60);
      } catch (error) {
        console.error("Error creating chat:", error);
      }
    };

    fetchData();
  }, [userData, dispatch]);





  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft1 > 0) {
        setTimeLeft1((prevTime) => prevTime - 1);
        dispatch(timeLeft(formatTime(timeLeft1))); 
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft1, dispatch]);

  const formatTime = (seconds) => {
    const integerNumber = parseInt(seconds)
    const minutes = Math.floor(integerNumber / 60);
    const remainingSeconds = integerNumber % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  function timeToSeconds(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return (hours * 3600) + (minutes * 60);
  }
  
  return (
    <>
      <div className='chat'>
        <div className='astrologername'>
          <div><h3>Astrologer</h3></div>
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

