  import React, { useEffect } from 'react'
  import "./Payment.css"
  import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
  export default function PaymentSuccessfull() {
const naviagte= useNavigate();



const location = useLocation();


    const searchParams = new URLSearchParams(location.search);
    const data= searchParams.get('reference');
    const message= searchParams.get('message');
 


      const handler121=()=>{
        naviagte('/')
      }

    return (
<>

    <div className='paymentsuccessfull-1'>
    <div className='paymentsuccessfull-2'>
        <h1>{message}</h1>
        <p>    Reference No.-  {data}</p>
        {/* <p>   {data}</p> */}
         <button  onClick={handler121} className='paymentsuccessfull-2-btn'>Explore</button>
    </div>
    
    

    </div>
</>
    )
  }
  