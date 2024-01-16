// // import React ,{useEffect,useState}from 'react'
// // import "./ChatCss.css"
// // // import { timeLeft } from '../../action';
// // import { useSelector } from 'react-redux/es/hooks/useSelector';
// // import { useDispatch } from 'react-redux';
// // import axios from 'axios';
// // export default function TimeLeft({timeLeft12}) {

// //   const userData = useSelector((state) => state.userData);
// //   const initialTime= useSelector((state)=>state.timeLeft)
// //   function timeToSeconds(time) {
// //     const [hours, minutes] = time.split(':').map(Number);
// //     return (hours * 60) + (minutes);
// //   }
// //     console.log(typeof initialTime)
// //   const updateUserAmount = async () => {
// //     const t2=timeToSeconds(initialTime)
// //     console.log(t2)
// //     const t1 = t2 * 0.166666667;
// //     console.log(timeToSeconds(initialTime))
// //     console.log(t1);
// //     try {
// //       const response2 = await axios.put("http://localhost:5000/api/updateuseramount", {
// //         userEmail: userData[0].data.userEmail,
// //         aviaibleBalance: t1.toFixed(2),
// //       });

// //       console.log(response2);
// //     } catch (error) {
// //       console.error("Error updating user amount:", error);
// //     }
// //   };


// //   useEffect(() => {
// //     const updateAmountInterval = setInterval(() => {
// //       updateUserAmount();
// //     }, 20000);

// //     return () => {
// //       clearInterval(updateAmountInterval);
// //     };
// //   }, [initialTime]);
// //   return (
// //   <>
// //     <div className='timeleft'>
      
// //         <div>Time left  {timeLeft12} </div>
// //         {/* <div>Recharge Now</div> */}
// //     </div>
// //   </>
// //   )
// // }


// import React, { useEffect } from 'react';
// import "./ChatCss.css";
// import { useSelector } from 'react-redux/es/hooks/useSelector';
// import axios from 'axios';

// export default function TimeLeft({ timeLeft12 }) {
//   const userData = useSelector((state) => state.userData);
//   const initialTime = useSelector((state) => state.timeLeft);

//   function timeToSeconds(time) {
//     const [hours, minutes] = time.split(':').map(Number);
//     return (hours * 60) + minutes;
//   }

//   const updateUserAmount = async (pol) => {
//     const t2 = timeToSeconds(initialTime);
//     console.log(t2);
//     console.log(pol);
//     const t1 = t2 * 0.166666667;
//     console.log(timeToSeconds(initialTime));
//     console.log(t1);
//     try {
//       const response2 = await axios.put("http://localhost:5000/api/updateuseramount", {
//         userEmail: userData[0].data.userEmail,
//         aviaibleBalance: t1.toFixed(2),
//       });

//       console.log(response2);
//     } catch (error) {
//       console.error("Error updating user amount:", error);
//     }
//   };

//   useEffect(() => {
//     const updateAmountInterval = setInterval(() => {
//       updateUserAmount(initialTime);
//     }, 20000);

//     return () => {
//       clearInterval(updateAmountInterval);
//     };
//   }, []);

//   return (
//     <>
//       <div className='timeleft'>
//         <div>Time left {timeLeft12} </div>
//         {/* <div>Recharge Now</div> */}
//       </div>
//     </>
//   );
// }


import React, { useEffect, useRef } from 'react';
import "./ChatCss.css";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { availbleBalance } from '../../action';
export default function TimeLeft({ timeLeft12 }) {
  const userData = useSelector((state) => state.userData);
  const initialTime = useSelector((state) => state.timeLeft);
  const initialTimeRef = useRef(initialTime);
  const dispatch=useDispatch();
  function timeToSeconds(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return (hours * 60) + minutes;
  }

  const updateUserAmount = async () => {
    const t2 = timeToSeconds(initialTimeRef.current);
    console.log(t2);
    const t1 = t2 * 0.166666667;
    console.log(timeToSeconds(initialTimeRef.current));
    console.log(t1);
    try {
      const response2 = await axios.put("http://localhost:5000/api/updateuseramount", {
        userEmail: userData[0].data.userEmail,
        aviaibleBalance: t1.toFixed(2),
      });
      dispatch(availbleBalance(t1.toFixed(2)));

      console.log(response2);
    } catch (error) {
      console.error("Error updating user amount:", error);
    }
  };

  useEffect(() => {
    // Update initialTimeRef.current whenever initialTime changes
    initialTimeRef.current = initialTime;
  }, [initialTime]);

  useEffect(() => {
    const updateAmountInterval = setInterval(() => {
      updateUserAmount();
    }, 20000);

    return () => {
      clearInterval(updateAmountInterval);
    };
  }, []);

  return (
    <>
      <div className='timeleft'>
        <div>Time left {timeLeft12} </div>
      </div>
    </>
  );
}
